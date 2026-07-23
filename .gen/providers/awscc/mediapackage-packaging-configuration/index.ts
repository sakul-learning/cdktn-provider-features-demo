// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MediapackagePackagingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * A CMAF packaging configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#cmaf_package MediapackagePackagingConfiguration#cmaf_package}
  */
  readonly cmafPackage?: MediapackagePackagingConfigurationCmafPackage;
  /**
  * A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#dash_package MediapackagePackagingConfiguration#dash_package}
  */
  readonly dashPackage?: MediapackagePackagingConfigurationDashPackage;
  /**
  * An HTTP Live Streaming (HLS) packaging configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#hls_package MediapackagePackagingConfiguration#hls_package}
  */
  readonly hlsPackage?: MediapackagePackagingConfigurationHlsPackage;
  /**
  * A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#mss_package MediapackagePackagingConfiguration#mss_package}
  */
  readonly mssPackage?: MediapackagePackagingConfigurationMssPackage;
  /**
  * The ID of the PackagingConfiguration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#packaging_configuration_id MediapackagePackagingConfiguration#packaging_configuration_id}
  */
  readonly packagingConfigurationId: string;
  /**
  * The ID of a PackagingGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#packaging_group_id MediapackagePackagingConfiguration#packaging_group_id}
  */
  readonly packagingGroupId: string;
  /**
  * A collection of tags associated with a resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#tags MediapackagePackagingConfiguration#tags}
  */
  readonly tags?: MediapackagePackagingConfigurationTags[] | cdktn.IResolvable;
}
export interface MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
  /**
  * A collection of audio encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}
  */
  readonly presetSpeke20Audio?: string;
  /**
  * A collection of video encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}
  */
  readonly presetSpeke20Video?: string;
}

export function mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preset_speke_20_audio: cdktn.stringToTerraform(struct!.presetSpeke20Audio),
    preset_speke_20_video: cdktn.stringToTerraform(struct!.presetSpeke20Video),
  }
}


export function mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preset_speke_20_audio: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Audio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_speke_20_video: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Video),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._presetSpeke20Audio !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Audio = this._presetSpeke20Audio;
    }
    if (this._presetSpeke20Video !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Video = this._presetSpeke20Video;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = undefined;
      this._presetSpeke20Video = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = value.presetSpeke20Audio;
      this._presetSpeke20Video = value.presetSpeke20Video;
    }
  }

  // preset_speke_20_audio - computed: true, optional: true, required: false
  private _presetSpeke20Audio?: string; 
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }
  public set presetSpeke20Audio(value: string) {
    this._presetSpeke20Audio = value;
  }
  public resetPresetSpeke20Audio() {
    this._presetSpeke20Audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20AudioInput() {
    return this._presetSpeke20Audio;
  }

  // preset_speke_20_video - computed: true, optional: true, required: false
  private _presetSpeke20Video?: string; 
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
  public set presetSpeke20Video(value: string) {
    this._presetSpeke20Video = value;
  }
  public resetPresetSpeke20Video() {
    this._presetSpeke20Video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20VideoInput() {
    return this._presetSpeke20Video;
  }
}
export interface MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
  /**
  * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}
  */
  readonly encryptionContractConfiguration?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
  /**
  * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The system IDs to include in key requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}
  */
  readonly systemIds?: string[];
  /**
  * The URL of the external key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}
  */
  readonly url?: string;
}

export function mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_contract_configuration: mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct!.encryptionContractConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    system_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.systemIds),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_contract_configuration: {
      value: mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct!.encryptionContractConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.systemIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContractConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContractConfiguration = this._encryptionContractConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._systemIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIds = this._systemIds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._systemIds = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = value.encryptionContractConfiguration;
      this._roleArn = value.roleArn;
      this._systemIds = value.systemIds;
      this._url = value.url;
    }
  }

  // encryption_contract_configuration - computed: true, optional: true, required: false
  private _encryptionContractConfiguration = new MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }
  public putEncryptionContractConfiguration(value: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration) {
    this._encryptionContractConfiguration.internalValue = value;
  }
  public resetEncryptionContractConfiguration() {
    this._encryptionContractConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContractConfigurationInput() {
    return this._encryptionContractConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // system_ids - computed: true, optional: true, required: false
  private _systemIds?: string[]; 
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }
  public set systemIds(value: string[]) {
    this._systemIds = value;
  }
  public resetSystemIds() {
    this._systemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdsInput() {
    return this._systemIds;
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
export interface MediapackagePackagingConfigurationCmafPackageEncryption {
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider?: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    speke_key_provider: mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}


export function mediapackagePackagingConfigurationCmafPackageEncryptionToHclTerraform(struct?: MediapackagePackagingConfigurationCmafPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    speke_key_provider: {
      value: mediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToHclTerraform(struct!.spekeKeyProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationCmafPackageEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spekeKeyProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spekeKeyProvider = this._spekeKeyProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationCmafPackageEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spekeKeyProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spekeKeyProvider.internalValue = value.spekeKeyProvider;
    }
  }

  // speke_key_provider - computed: true, optional: true, required: false
  private _spekeKeyProvider = new MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
  public putSpekeKeyProvider(value: MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider) {
    this._spekeKeyProvider.internalValue = value;
  }
  public resetSpekeKeyProvider() {
    this._spekeKeyProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spekeKeyProviderInput() {
    return this._spekeKeyProvider.internalValue;
  }
}
export interface MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection {
  /**
  * The maximum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
  */
  readonly maxVideoBitsPerSecond?: number;
  /**
  * The minimum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
  */
  readonly minVideoBitsPerSecond?: number;
  /**
  * A directive that determines the order of streams in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}
  */
  readonly streamOrder?: string;
}

export function mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_video_bits_per_second: cdktn.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktn.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktn.stringToTerraform(struct!.streamOrder),
  }
}


export function mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToHclTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.maxVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.minVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_order: {
      value: cdktn.stringToHclTerraform(struct!.streamOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitsPerSecond = this._maxVideoBitsPerSecond;
    }
    if (this._minVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVideoBitsPerSecond = this._minVideoBitsPerSecond;
    }
    if (this._streamOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOrder = this._streamOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = undefined;
      this._minVideoBitsPerSecond = undefined;
      this._streamOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = value.maxVideoBitsPerSecond;
      this._minVideoBitsPerSecond = value.minVideoBitsPerSecond;
      this._streamOrder = value.streamOrder;
    }
  }

  // max_video_bits_per_second - computed: true, optional: true, required: false
  private _maxVideoBitsPerSecond?: number; 
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }
  public set maxVideoBitsPerSecond(value: number) {
    this._maxVideoBitsPerSecond = value;
  }
  public resetMaxVideoBitsPerSecond() {
    this._maxVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitsPerSecondInput() {
    return this._maxVideoBitsPerSecond;
  }

  // min_video_bits_per_second - computed: true, optional: true, required: false
  private _minVideoBitsPerSecond?: number; 
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }
  public set minVideoBitsPerSecond(value: number) {
    this._minVideoBitsPerSecond = value;
  }
  public resetMinVideoBitsPerSecond() {
    this._minVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVideoBitsPerSecondInput() {
    return this._minVideoBitsPerSecond;
  }

  // stream_order - computed: true, optional: true, required: false
  private _streamOrder?: string; 
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
  public set streamOrder(value: string) {
    this._streamOrder = value;
  }
  public resetStreamOrder() {
    this._streamOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOrderInput() {
    return this._streamOrder;
  }
}
export interface MediapackagePackagingConfigurationCmafPackageHlsManifests {
  /**
  * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}
  */
  readonly adMarkers?: string;
  /**
  * When enabled, an I-Frame only stream will be included in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}
  */
  readonly includeIframeOnlyStream?: boolean | cdktn.IResolvable;
  /**
  * An optional string to include in the name of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}
  */
  readonly manifestName?: string;
  /**
  * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}
  */
  readonly programDateTimeIntervalSeconds?: number;
  /**
  * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}
  */
  readonly repeatExtXKey?: boolean | cdktn.IResolvable;
  /**
  * A StreamSelection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}
  */
  readonly streamSelection?: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection;
}

export function mediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_markers: cdktn.stringToTerraform(struct!.adMarkers),
    include_iframe_only_stream: cdktn.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktn.stringToTerraform(struct!.manifestName),
    program_date_time_interval_seconds: cdktn.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    repeat_ext_x_key: cdktn.booleanToTerraform(struct!.repeatExtXKey),
    stream_selection: mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}


export function mediapackagePackagingConfigurationCmafPackageHlsManifestsToHclTerraform(struct?: MediapackagePackagingConfigurationCmafPackageHlsManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_markers: {
      value: cdktn.stringToHclTerraform(struct!.adMarkers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_iframe_only_stream: {
      value: cdktn.booleanToHclTerraform(struct!.includeIframeOnlyStream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manifest_name: {
      value: cdktn.stringToHclTerraform(struct!.manifestName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    program_date_time_interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.programDateTimeIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat_ext_x_key: {
      value: cdktn.booleanToHclTerraform(struct!.repeatExtXKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stream_selection: {
      value: mediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToHclTerraform(struct!.streamSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediapackagePackagingConfigurationCmafPackageHlsManifests | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adMarkers = this._adMarkers;
    }
    if (this._includeIframeOnlyStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIframeOnlyStream = this._includeIframeOnlyStream;
    }
    if (this._manifestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestName = this._manifestName;
    }
    if (this._programDateTimeIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.programDateTimeIntervalSeconds = this._programDateTimeIntervalSeconds;
    }
    if (this._repeatExtXKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatExtXKey = this._repeatExtXKey;
    }
    if (this._streamSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSelection = this._streamSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationCmafPackageHlsManifests | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adMarkers = undefined;
      this._includeIframeOnlyStream = undefined;
      this._manifestName = undefined;
      this._programDateTimeIntervalSeconds = undefined;
      this._repeatExtXKey = undefined;
      this._streamSelection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adMarkers = value.adMarkers;
      this._includeIframeOnlyStream = value.includeIframeOnlyStream;
      this._manifestName = value.manifestName;
      this._programDateTimeIntervalSeconds = value.programDateTimeIntervalSeconds;
      this._repeatExtXKey = value.repeatExtXKey;
      this._streamSelection.internalValue = value.streamSelection;
    }
  }

  // ad_markers - computed: true, optional: true, required: false
  private _adMarkers?: string; 
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }
  public set adMarkers(value: string) {
    this._adMarkers = value;
  }
  public resetAdMarkers() {
    this._adMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adMarkersInput() {
    return this._adMarkers;
  }

  // include_iframe_only_stream - computed: true, optional: true, required: false
  private _includeIframeOnlyStream?: boolean | cdktn.IResolvable; 
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }
  public set includeIframeOnlyStream(value: boolean | cdktn.IResolvable) {
    this._includeIframeOnlyStream = value;
  }
  public resetIncludeIframeOnlyStream() {
    this._includeIframeOnlyStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIframeOnlyStreamInput() {
    return this._includeIframeOnlyStream;
  }

  // manifest_name - computed: true, optional: true, required: false
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  public resetManifestName() {
    this._manifestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
  }

  // program_date_time_interval_seconds - computed: true, optional: true, required: false
  private _programDateTimeIntervalSeconds?: number; 
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }
  public set programDateTimeIntervalSeconds(value: number) {
    this._programDateTimeIntervalSeconds = value;
  }
  public resetProgramDateTimeIntervalSeconds() {
    this._programDateTimeIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programDateTimeIntervalSecondsInput() {
    return this._programDateTimeIntervalSeconds;
  }

  // repeat_ext_x_key - computed: true, optional: true, required: false
  private _repeatExtXKey?: boolean | cdktn.IResolvable; 
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }
  public set repeatExtXKey(value: boolean | cdktn.IResolvable) {
    this._repeatExtXKey = value;
  }
  public resetRepeatExtXKey() {
    this._repeatExtXKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatExtXKeyInput() {
    return this._repeatExtXKey;
  }

  // stream_selection - computed: true, optional: true, required: false
  private _streamSelection = new MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
  public putStreamSelection(value: MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection) {
    this._streamSelection.internalValue = value;
  }
  public resetStreamSelection() {
    this._streamSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSelectionInput() {
    return this._streamSelection.internalValue;
  }
}

export class MediapackagePackagingConfigurationCmafPackageHlsManifestsList extends cdktn.ComplexList {
  public internalValue? : MediapackagePackagingConfigurationCmafPackageHlsManifests[] | cdktn.IResolvable

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
  public get(index: number): MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference {
    return new MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediapackagePackagingConfigurationCmafPackage {
  /**
  * A CMAF encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}
  */
  readonly encryption?: MediapackagePackagingConfigurationCmafPackageEncryption;
  /**
  * A list of HLS manifest configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}
  */
  readonly hlsManifests?: MediapackagePackagingConfigurationCmafPackageHlsManifests[] | cdktn.IResolvable;
  /**
  * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}
  */
  readonly includeEncoderConfigurationInSegments?: boolean | cdktn.IResolvable;
  /**
  * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
  */
  readonly segmentDurationSeconds?: number;
}

export function mediapackagePackagingConfigurationCmafPackageToTerraform(struct?: MediapackagePackagingConfigurationCmafPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption: mediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktn.listMapper(mediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform, false)(struct!.hlsManifests),
    include_encoder_configuration_in_segments: cdktn.booleanToTerraform(struct!.includeEncoderConfigurationInSegments),
    segment_duration_seconds: cdktn.numberToTerraform(struct!.segmentDurationSeconds),
  }
}


export function mediapackagePackagingConfigurationCmafPackageToHclTerraform(struct?: MediapackagePackagingConfigurationCmafPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption: {
      value: mediapackagePackagingConfigurationCmafPackageEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationCmafPackageEncryption",
    },
    hls_manifests: {
      value: cdktn.listMapperHcl(mediapackagePackagingConfigurationCmafPackageHlsManifestsToHclTerraform, false)(struct!.hlsManifests),
      isBlock: true,
      type: "list",
      storageClassType: "MediapackagePackagingConfigurationCmafPackageHlsManifestsList",
    },
    include_encoder_configuration_in_segments: {
      value: cdktn.booleanToHclTerraform(struct!.includeEncoderConfigurationInSegments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.segmentDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationCmafPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationCmafPackage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._hlsManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsManifests = this._hlsManifests?.internalValue;
    }
    if (this._includeEncoderConfigurationInSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeEncoderConfigurationInSegments = this._includeEncoderConfigurationInSegments;
    }
    if (this._segmentDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentDurationSeconds = this._segmentDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationCmafPackage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._hlsManifests.internalValue = undefined;
      this._includeEncoderConfigurationInSegments = undefined;
      this._segmentDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._hlsManifests.internalValue = value.hlsManifests;
      this._includeEncoderConfigurationInSegments = value.includeEncoderConfigurationInSegments;
      this._segmentDurationSeconds = value.segmentDurationSeconds;
    }
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MediapackagePackagingConfigurationCmafPackageEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // hls_manifests - computed: true, optional: true, required: false
  private _hlsManifests = new MediapackagePackagingConfigurationCmafPackageHlsManifestsList(this, "hls_manifests", false);
  public get hlsManifests() {
    return this._hlsManifests;
  }
  public putHlsManifests(value: MediapackagePackagingConfigurationCmafPackageHlsManifests[] | cdktn.IResolvable) {
    this._hlsManifests.internalValue = value;
  }
  public resetHlsManifests() {
    this._hlsManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsManifestsInput() {
    return this._hlsManifests.internalValue;
  }

  // include_encoder_configuration_in_segments - computed: true, optional: true, required: false
  private _includeEncoderConfigurationInSegments?: boolean | cdktn.IResolvable; 
  public get includeEncoderConfigurationInSegments() {
    return this.getBooleanAttribute('include_encoder_configuration_in_segments');
  }
  public set includeEncoderConfigurationInSegments(value: boolean | cdktn.IResolvable) {
    this._includeEncoderConfigurationInSegments = value;
  }
  public resetIncludeEncoderConfigurationInSegments() {
    this._includeEncoderConfigurationInSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEncoderConfigurationInSegmentsInput() {
    return this._includeEncoderConfigurationInSegments;
  }

  // segment_duration_seconds - computed: true, optional: true, required: false
  private _segmentDurationSeconds?: number; 
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
  public set segmentDurationSeconds(value: number) {
    this._segmentDurationSeconds = value;
  }
  public resetSegmentDurationSeconds() {
    this._segmentDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDurationSecondsInput() {
    return this._segmentDurationSeconds;
  }
}
export interface MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection {
  /**
  * The maximum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
  */
  readonly maxVideoBitsPerSecond?: number;
  /**
  * The minimum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
  */
  readonly minVideoBitsPerSecond?: number;
  /**
  * A directive that determines the order of streams in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}
  */
  readonly streamOrder?: string;
}

export function mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_video_bits_per_second: cdktn.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktn.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktn.stringToTerraform(struct!.streamOrder),
  }
}


export function mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToHclTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.maxVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.minVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_order: {
      value: cdktn.stringToHclTerraform(struct!.streamOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitsPerSecond = this._maxVideoBitsPerSecond;
    }
    if (this._minVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVideoBitsPerSecond = this._minVideoBitsPerSecond;
    }
    if (this._streamOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOrder = this._streamOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = undefined;
      this._minVideoBitsPerSecond = undefined;
      this._streamOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = value.maxVideoBitsPerSecond;
      this._minVideoBitsPerSecond = value.minVideoBitsPerSecond;
      this._streamOrder = value.streamOrder;
    }
  }

  // max_video_bits_per_second - computed: true, optional: true, required: false
  private _maxVideoBitsPerSecond?: number; 
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }
  public set maxVideoBitsPerSecond(value: number) {
    this._maxVideoBitsPerSecond = value;
  }
  public resetMaxVideoBitsPerSecond() {
    this._maxVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitsPerSecondInput() {
    return this._maxVideoBitsPerSecond;
  }

  // min_video_bits_per_second - computed: true, optional: true, required: false
  private _minVideoBitsPerSecond?: number; 
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }
  public set minVideoBitsPerSecond(value: number) {
    this._minVideoBitsPerSecond = value;
  }
  public resetMinVideoBitsPerSecond() {
    this._minVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVideoBitsPerSecondInput() {
    return this._minVideoBitsPerSecond;
  }

  // stream_order - computed: true, optional: true, required: false
  private _streamOrder?: string; 
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
  public set streamOrder(value: string) {
    this._streamOrder = value;
  }
  public resetStreamOrder() {
    this._streamOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOrderInput() {
    return this._streamOrder;
  }
}
export interface MediapackagePackagingConfigurationDashPackageDashManifests {
  /**
  * Determines the position of some tags in the Media Presentation Description (MPD). When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#manifest_layout MediapackagePackagingConfiguration#manifest_layout}
  */
  readonly manifestLayout?: string;
  /**
  * An optional string to include in the name of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}
  */
  readonly manifestName?: string;
  /**
  * Minimum duration (in seconds) that a player will buffer media before starting the presentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#min_buffer_time_seconds MediapackagePackagingConfiguration#min_buffer_time_seconds}
  */
  readonly minBufferTimeSeconds?: number;
  /**
  * The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#profile MediapackagePackagingConfiguration#profile}
  */
  readonly profile?: string;
  /**
  * The source of scte markers used. When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#scte_markers_source MediapackagePackagingConfiguration#scte_markers_source}
  */
  readonly scteMarkersSource?: string;
  /**
  * A StreamSelection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}
  */
  readonly streamSelection?: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection;
}

export function mediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manifest_layout: cdktn.stringToTerraform(struct!.manifestLayout),
    manifest_name: cdktn.stringToTerraform(struct!.manifestName),
    min_buffer_time_seconds: cdktn.numberToTerraform(struct!.minBufferTimeSeconds),
    profile: cdktn.stringToTerraform(struct!.profile),
    scte_markers_source: cdktn.stringToTerraform(struct!.scteMarkersSource),
    stream_selection: mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}


export function mediapackagePackagingConfigurationDashPackageDashManifestsToHclTerraform(struct?: MediapackagePackagingConfigurationDashPackageDashManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manifest_layout: {
      value: cdktn.stringToHclTerraform(struct!.manifestLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest_name: {
      value: cdktn.stringToHclTerraform(struct!.manifestName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_buffer_time_seconds: {
      value: cdktn.numberToHclTerraform(struct!.minBufferTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktn.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scte_markers_source: {
      value: cdktn.stringToHclTerraform(struct!.scteMarkersSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_selection: {
      value: mediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToHclTerraform(struct!.streamSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediapackagePackagingConfigurationDashPackageDashManifests | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestLayout = this._manifestLayout;
    }
    if (this._manifestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestName = this._manifestName;
    }
    if (this._minBufferTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBufferTimeSeconds = this._minBufferTimeSeconds;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._scteMarkersSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.scteMarkersSource = this._scteMarkersSource;
    }
    if (this._streamSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSelection = this._streamSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationDashPackageDashManifests | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestLayout = undefined;
      this._manifestName = undefined;
      this._minBufferTimeSeconds = undefined;
      this._profile = undefined;
      this._scteMarkersSource = undefined;
      this._streamSelection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestLayout = value.manifestLayout;
      this._manifestName = value.manifestName;
      this._minBufferTimeSeconds = value.minBufferTimeSeconds;
      this._profile = value.profile;
      this._scteMarkersSource = value.scteMarkersSource;
      this._streamSelection.internalValue = value.streamSelection;
    }
  }

  // manifest_layout - computed: true, optional: true, required: false
  private _manifestLayout?: string; 
  public get manifestLayout() {
    return this.getStringAttribute('manifest_layout');
  }
  public set manifestLayout(value: string) {
    this._manifestLayout = value;
  }
  public resetManifestLayout() {
    this._manifestLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestLayoutInput() {
    return this._manifestLayout;
  }

  // manifest_name - computed: true, optional: true, required: false
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  public resetManifestName() {
    this._manifestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
  }

  // min_buffer_time_seconds - computed: true, optional: true, required: false
  private _minBufferTimeSeconds?: number; 
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }
  public set minBufferTimeSeconds(value: number) {
    this._minBufferTimeSeconds = value;
  }
  public resetMinBufferTimeSeconds() {
    this._minBufferTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBufferTimeSecondsInput() {
    return this._minBufferTimeSeconds;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // scte_markers_source - computed: true, optional: true, required: false
  private _scteMarkersSource?: string; 
  public get scteMarkersSource() {
    return this.getStringAttribute('scte_markers_source');
  }
  public set scteMarkersSource(value: string) {
    this._scteMarkersSource = value;
  }
  public resetScteMarkersSource() {
    this._scteMarkersSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scteMarkersSourceInput() {
    return this._scteMarkersSource;
  }

  // stream_selection - computed: true, optional: true, required: false
  private _streamSelection = new MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
  public putStreamSelection(value: MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection) {
    this._streamSelection.internalValue = value;
  }
  public resetStreamSelection() {
    this._streamSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSelectionInput() {
    return this._streamSelection.internalValue;
  }
}

export class MediapackagePackagingConfigurationDashPackageDashManifestsList extends cdktn.ComplexList {
  public internalValue? : MediapackagePackagingConfigurationDashPackageDashManifests[] | cdktn.IResolvable

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
  public get(index: number): MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference {
    return new MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
  /**
  * A collection of audio encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}
  */
  readonly presetSpeke20Audio?: string;
  /**
  * A collection of video encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}
  */
  readonly presetSpeke20Video?: string;
}

export function mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preset_speke_20_audio: cdktn.stringToTerraform(struct!.presetSpeke20Audio),
    preset_speke_20_video: cdktn.stringToTerraform(struct!.presetSpeke20Video),
  }
}


export function mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preset_speke_20_audio: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Audio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_speke_20_video: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Video),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._presetSpeke20Audio !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Audio = this._presetSpeke20Audio;
    }
    if (this._presetSpeke20Video !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Video = this._presetSpeke20Video;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = undefined;
      this._presetSpeke20Video = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = value.presetSpeke20Audio;
      this._presetSpeke20Video = value.presetSpeke20Video;
    }
  }

  // preset_speke_20_audio - computed: true, optional: true, required: false
  private _presetSpeke20Audio?: string; 
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }
  public set presetSpeke20Audio(value: string) {
    this._presetSpeke20Audio = value;
  }
  public resetPresetSpeke20Audio() {
    this._presetSpeke20Audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20AudioInput() {
    return this._presetSpeke20Audio;
  }

  // preset_speke_20_video - computed: true, optional: true, required: false
  private _presetSpeke20Video?: string; 
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
  public set presetSpeke20Video(value: string) {
    this._presetSpeke20Video = value;
  }
  public resetPresetSpeke20Video() {
    this._presetSpeke20Video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20VideoInput() {
    return this._presetSpeke20Video;
  }
}
export interface MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
  /**
  * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}
  */
  readonly encryptionContractConfiguration?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
  /**
  * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The system IDs to include in key requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}
  */
  readonly systemIds?: string[];
  /**
  * The URL of the external key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}
  */
  readonly url?: string;
}

export function mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_contract_configuration: mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct!.encryptionContractConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    system_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.systemIds),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_contract_configuration: {
      value: mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct!.encryptionContractConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.systemIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContractConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContractConfiguration = this._encryptionContractConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._systemIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIds = this._systemIds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._systemIds = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = value.encryptionContractConfiguration;
      this._roleArn = value.roleArn;
      this._systemIds = value.systemIds;
      this._url = value.url;
    }
  }

  // encryption_contract_configuration - computed: true, optional: true, required: false
  private _encryptionContractConfiguration = new MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }
  public putEncryptionContractConfiguration(value: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration) {
    this._encryptionContractConfiguration.internalValue = value;
  }
  public resetEncryptionContractConfiguration() {
    this._encryptionContractConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContractConfigurationInput() {
    return this._encryptionContractConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // system_ids - computed: true, optional: true, required: false
  private _systemIds?: string[]; 
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }
  public set systemIds(value: string[]) {
    this._systemIds = value;
  }
  public resetSystemIds() {
    this._systemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdsInput() {
    return this._systemIds;
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
export interface MediapackagePackagingConfigurationDashPackageEncryption {
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider?: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    speke_key_provider: mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}


export function mediapackagePackagingConfigurationDashPackageEncryptionToHclTerraform(struct?: MediapackagePackagingConfigurationDashPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    speke_key_provider: {
      value: mediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToHclTerraform(struct!.spekeKeyProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationDashPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationDashPackageEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spekeKeyProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spekeKeyProvider = this._spekeKeyProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationDashPackageEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spekeKeyProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spekeKeyProvider.internalValue = value.spekeKeyProvider;
    }
  }

  // speke_key_provider - computed: true, optional: true, required: false
  private _spekeKeyProvider = new MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
  public putSpekeKeyProvider(value: MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider) {
    this._spekeKeyProvider.internalValue = value;
  }
  public resetSpekeKeyProvider() {
    this._spekeKeyProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spekeKeyProviderInput() {
    return this._spekeKeyProvider.internalValue;
  }
}
export interface MediapackagePackagingConfigurationDashPackage {
  /**
  * A list of DASH manifest configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#dash_manifests MediapackagePackagingConfiguration#dash_manifests}
  */
  readonly dashManifests?: MediapackagePackagingConfigurationDashPackageDashManifests[] | cdktn.IResolvable;
  /**
  * A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}
  */
  readonly encryption?: MediapackagePackagingConfigurationDashPackageEncryption;
  /**
  * When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}
  */
  readonly includeEncoderConfigurationInSegments?: boolean | cdktn.IResolvable;
  /**
  * When enabled, an I-Frame only stream will be included in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}
  */
  readonly includeIframeOnlyStream?: boolean | cdktn.IResolvable;
  /**
  * A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#period_triggers MediapackagePackagingConfiguration#period_triggers}
  */
  readonly periodTriggers?: string[];
  /**
  * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
  */
  readonly segmentDurationSeconds?: number;
  /**
  * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#segment_template_format MediapackagePackagingConfiguration#segment_template_format}
  */
  readonly segmentTemplateFormat?: string;
}

export function mediapackagePackagingConfigurationDashPackageToTerraform(struct?: MediapackagePackagingConfigurationDashPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dash_manifests: cdktn.listMapper(mediapackagePackagingConfigurationDashPackageDashManifestsToTerraform, false)(struct!.dashManifests),
    encryption: mediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct!.encryption),
    include_encoder_configuration_in_segments: cdktn.booleanToTerraform(struct!.includeEncoderConfigurationInSegments),
    include_iframe_only_stream: cdktn.booleanToTerraform(struct!.includeIframeOnlyStream),
    period_triggers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.periodTriggers),
    segment_duration_seconds: cdktn.numberToTerraform(struct!.segmentDurationSeconds),
    segment_template_format: cdktn.stringToTerraform(struct!.segmentTemplateFormat),
  }
}


export function mediapackagePackagingConfigurationDashPackageToHclTerraform(struct?: MediapackagePackagingConfigurationDashPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dash_manifests: {
      value: cdktn.listMapperHcl(mediapackagePackagingConfigurationDashPackageDashManifestsToHclTerraform, false)(struct!.dashManifests),
      isBlock: true,
      type: "list",
      storageClassType: "MediapackagePackagingConfigurationDashPackageDashManifestsList",
    },
    encryption: {
      value: mediapackagePackagingConfigurationDashPackageEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationDashPackageEncryption",
    },
    include_encoder_configuration_in_segments: {
      value: cdktn.booleanToHclTerraform(struct!.includeEncoderConfigurationInSegments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_iframe_only_stream: {
      value: cdktn.booleanToHclTerraform(struct!.includeIframeOnlyStream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    period_triggers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.periodTriggers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    segment_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.segmentDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_template_format: {
      value: cdktn.stringToHclTerraform(struct!.segmentTemplateFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationDashPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationDashPackage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashManifests = this._dashManifests?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._includeEncoderConfigurationInSegments !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeEncoderConfigurationInSegments = this._includeEncoderConfigurationInSegments;
    }
    if (this._includeIframeOnlyStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIframeOnlyStream = this._includeIframeOnlyStream;
    }
    if (this._periodTriggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodTriggers = this._periodTriggers;
    }
    if (this._segmentDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentDurationSeconds = this._segmentDurationSeconds;
    }
    if (this._segmentTemplateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentTemplateFormat = this._segmentTemplateFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationDashPackage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashManifests.internalValue = undefined;
      this._encryption.internalValue = undefined;
      this._includeEncoderConfigurationInSegments = undefined;
      this._includeIframeOnlyStream = undefined;
      this._periodTriggers = undefined;
      this._segmentDurationSeconds = undefined;
      this._segmentTemplateFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashManifests.internalValue = value.dashManifests;
      this._encryption.internalValue = value.encryption;
      this._includeEncoderConfigurationInSegments = value.includeEncoderConfigurationInSegments;
      this._includeIframeOnlyStream = value.includeIframeOnlyStream;
      this._periodTriggers = value.periodTriggers;
      this._segmentDurationSeconds = value.segmentDurationSeconds;
      this._segmentTemplateFormat = value.segmentTemplateFormat;
    }
  }

  // dash_manifests - computed: true, optional: true, required: false
  private _dashManifests = new MediapackagePackagingConfigurationDashPackageDashManifestsList(this, "dash_manifests", false);
  public get dashManifests() {
    return this._dashManifests;
  }
  public putDashManifests(value: MediapackagePackagingConfigurationDashPackageDashManifests[] | cdktn.IResolvable) {
    this._dashManifests.internalValue = value;
  }
  public resetDashManifests() {
    this._dashManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashManifestsInput() {
    return this._dashManifests.internalValue;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new MediapackagePackagingConfigurationDashPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MediapackagePackagingConfigurationDashPackageEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // include_encoder_configuration_in_segments - computed: true, optional: true, required: false
  private _includeEncoderConfigurationInSegments?: boolean | cdktn.IResolvable; 
  public get includeEncoderConfigurationInSegments() {
    return this.getBooleanAttribute('include_encoder_configuration_in_segments');
  }
  public set includeEncoderConfigurationInSegments(value: boolean | cdktn.IResolvable) {
    this._includeEncoderConfigurationInSegments = value;
  }
  public resetIncludeEncoderConfigurationInSegments() {
    this._includeEncoderConfigurationInSegments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeEncoderConfigurationInSegmentsInput() {
    return this._includeEncoderConfigurationInSegments;
  }

  // include_iframe_only_stream - computed: true, optional: true, required: false
  private _includeIframeOnlyStream?: boolean | cdktn.IResolvable; 
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }
  public set includeIframeOnlyStream(value: boolean | cdktn.IResolvable) {
    this._includeIframeOnlyStream = value;
  }
  public resetIncludeIframeOnlyStream() {
    this._includeIframeOnlyStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIframeOnlyStreamInput() {
    return this._includeIframeOnlyStream;
  }

  // period_triggers - computed: true, optional: true, required: false
  private _periodTriggers?: string[]; 
  public get periodTriggers() {
    return this.getListAttribute('period_triggers');
  }
  public set periodTriggers(value: string[]) {
    this._periodTriggers = value;
  }
  public resetPeriodTriggers() {
    this._periodTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTriggersInput() {
    return this._periodTriggers;
  }

  // segment_duration_seconds - computed: true, optional: true, required: false
  private _segmentDurationSeconds?: number; 
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
  public set segmentDurationSeconds(value: number) {
    this._segmentDurationSeconds = value;
  }
  public resetSegmentDurationSeconds() {
    this._segmentDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDurationSecondsInput() {
    return this._segmentDurationSeconds;
  }

  // segment_template_format - computed: true, optional: true, required: false
  private _segmentTemplateFormat?: string; 
  public get segmentTemplateFormat() {
    return this.getStringAttribute('segment_template_format');
  }
  public set segmentTemplateFormat(value: string) {
    this._segmentTemplateFormat = value;
  }
  public resetSegmentTemplateFormat() {
    this._segmentTemplateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTemplateFormatInput() {
    return this._segmentTemplateFormat;
  }
}
export interface MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
  /**
  * A collection of audio encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}
  */
  readonly presetSpeke20Audio?: string;
  /**
  * A collection of video encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}
  */
  readonly presetSpeke20Video?: string;
}

export function mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preset_speke_20_audio: cdktn.stringToTerraform(struct!.presetSpeke20Audio),
    preset_speke_20_video: cdktn.stringToTerraform(struct!.presetSpeke20Video),
  }
}


export function mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preset_speke_20_audio: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Audio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_speke_20_video: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Video),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._presetSpeke20Audio !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Audio = this._presetSpeke20Audio;
    }
    if (this._presetSpeke20Video !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Video = this._presetSpeke20Video;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = undefined;
      this._presetSpeke20Video = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = value.presetSpeke20Audio;
      this._presetSpeke20Video = value.presetSpeke20Video;
    }
  }

  // preset_speke_20_audio - computed: true, optional: true, required: false
  private _presetSpeke20Audio?: string; 
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }
  public set presetSpeke20Audio(value: string) {
    this._presetSpeke20Audio = value;
  }
  public resetPresetSpeke20Audio() {
    this._presetSpeke20Audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20AudioInput() {
    return this._presetSpeke20Audio;
  }

  // preset_speke_20_video - computed: true, optional: true, required: false
  private _presetSpeke20Video?: string; 
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
  public set presetSpeke20Video(value: string) {
    this._presetSpeke20Video = value;
  }
  public resetPresetSpeke20Video() {
    this._presetSpeke20Video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20VideoInput() {
    return this._presetSpeke20Video;
  }
}
export interface MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
  /**
  * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}
  */
  readonly encryptionContractConfiguration?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
  /**
  * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The system IDs to include in key requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}
  */
  readonly systemIds?: string[];
  /**
  * The URL of the external key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}
  */
  readonly url?: string;
}

export function mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_contract_configuration: mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct!.encryptionContractConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    system_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.systemIds),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_contract_configuration: {
      value: mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct!.encryptionContractConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.systemIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContractConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContractConfiguration = this._encryptionContractConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._systemIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIds = this._systemIds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._systemIds = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = value.encryptionContractConfiguration;
      this._roleArn = value.roleArn;
      this._systemIds = value.systemIds;
      this._url = value.url;
    }
  }

  // encryption_contract_configuration - computed: true, optional: true, required: false
  private _encryptionContractConfiguration = new MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }
  public putEncryptionContractConfiguration(value: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration) {
    this._encryptionContractConfiguration.internalValue = value;
  }
  public resetEncryptionContractConfiguration() {
    this._encryptionContractConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContractConfigurationInput() {
    return this._encryptionContractConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // system_ids - computed: true, optional: true, required: false
  private _systemIds?: string[]; 
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }
  public set systemIds(value: string[]) {
    this._systemIds = value;
  }
  public resetSystemIds() {
    this._systemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdsInput() {
    return this._systemIds;
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
export interface MediapackagePackagingConfigurationHlsPackageEncryption {
  /**
  * An HTTP Live Streaming (HLS) encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#constant_initialization_vector MediapackagePackagingConfiguration#constant_initialization_vector}
  */
  readonly constantInitializationVector?: string;
  /**
  * The encryption method to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption_method MediapackagePackagingConfiguration#encryption_method}
  */
  readonly encryptionMethod?: string;
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider?: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    constant_initialization_vector: cdktn.stringToTerraform(struct!.constantInitializationVector),
    encryption_method: cdktn.stringToTerraform(struct!.encryptionMethod),
    speke_key_provider: mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}


export function mediapackagePackagingConfigurationHlsPackageEncryptionToHclTerraform(struct?: MediapackagePackagingConfigurationHlsPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    constant_initialization_vector: {
      value: cdktn.stringToHclTerraform(struct!.constantInitializationVector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_method: {
      value: cdktn.stringToHclTerraform(struct!.encryptionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speke_key_provider: {
      value: mediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToHclTerraform(struct!.spekeKeyProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationHlsPackageEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constantInitializationVector !== undefined) {
      hasAnyValues = true;
      internalValueResult.constantInitializationVector = this._constantInitializationVector;
    }
    if (this._encryptionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMethod = this._encryptionMethod;
    }
    if (this._spekeKeyProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spekeKeyProvider = this._spekeKeyProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationHlsPackageEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constantInitializationVector = undefined;
      this._encryptionMethod = undefined;
      this._spekeKeyProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constantInitializationVector = value.constantInitializationVector;
      this._encryptionMethod = value.encryptionMethod;
      this._spekeKeyProvider.internalValue = value.spekeKeyProvider;
    }
  }

  // constant_initialization_vector - computed: true, optional: true, required: false
  private _constantInitializationVector?: string; 
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }
  public set constantInitializationVector(value: string) {
    this._constantInitializationVector = value;
  }
  public resetConstantInitializationVector() {
    this._constantInitializationVector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInitializationVectorInput() {
    return this._constantInitializationVector;
  }

  // encryption_method - computed: true, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }

  // speke_key_provider - computed: true, optional: true, required: false
  private _spekeKeyProvider = new MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
  public putSpekeKeyProvider(value: MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider) {
    this._spekeKeyProvider.internalValue = value;
  }
  public resetSpekeKeyProvider() {
    this._spekeKeyProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spekeKeyProviderInput() {
    return this._spekeKeyProvider.internalValue;
  }
}
export interface MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection {
  /**
  * The maximum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
  */
  readonly maxVideoBitsPerSecond?: number;
  /**
  * The minimum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
  */
  readonly minVideoBitsPerSecond?: number;
  /**
  * A directive that determines the order of streams in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}
  */
  readonly streamOrder?: string;
}

export function mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_video_bits_per_second: cdktn.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktn.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktn.stringToTerraform(struct!.streamOrder),
  }
}


export function mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToHclTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.maxVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.minVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_order: {
      value: cdktn.stringToHclTerraform(struct!.streamOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitsPerSecond = this._maxVideoBitsPerSecond;
    }
    if (this._minVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVideoBitsPerSecond = this._minVideoBitsPerSecond;
    }
    if (this._streamOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOrder = this._streamOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = undefined;
      this._minVideoBitsPerSecond = undefined;
      this._streamOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = value.maxVideoBitsPerSecond;
      this._minVideoBitsPerSecond = value.minVideoBitsPerSecond;
      this._streamOrder = value.streamOrder;
    }
  }

  // max_video_bits_per_second - computed: true, optional: true, required: false
  private _maxVideoBitsPerSecond?: number; 
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }
  public set maxVideoBitsPerSecond(value: number) {
    this._maxVideoBitsPerSecond = value;
  }
  public resetMaxVideoBitsPerSecond() {
    this._maxVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitsPerSecondInput() {
    return this._maxVideoBitsPerSecond;
  }

  // min_video_bits_per_second - computed: true, optional: true, required: false
  private _minVideoBitsPerSecond?: number; 
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }
  public set minVideoBitsPerSecond(value: number) {
    this._minVideoBitsPerSecond = value;
  }
  public resetMinVideoBitsPerSecond() {
    this._minVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVideoBitsPerSecondInput() {
    return this._minVideoBitsPerSecond;
  }

  // stream_order - computed: true, optional: true, required: false
  private _streamOrder?: string; 
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
  public set streamOrder(value: string) {
    this._streamOrder = value;
  }
  public resetStreamOrder() {
    this._streamOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOrderInput() {
    return this._streamOrder;
  }
}
export interface MediapackagePackagingConfigurationHlsPackageHlsManifests {
  /**
  * This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}
  */
  readonly adMarkers?: string;
  /**
  * When enabled, an I-Frame only stream will be included in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}
  */
  readonly includeIframeOnlyStream?: boolean | cdktn.IResolvable;
  /**
  * An optional string to include in the name of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}
  */
  readonly manifestName?: string;
  /**
  * The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}
  */
  readonly programDateTimeIntervalSeconds?: number;
  /**
  * When enabled, the EXT-X-KEY tag will be repeated in output manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}
  */
  readonly repeatExtXKey?: boolean | cdktn.IResolvable;
  /**
  * A StreamSelection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}
  */
  readonly streamSelection?: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection;
}

export function mediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ad_markers: cdktn.stringToTerraform(struct!.adMarkers),
    include_iframe_only_stream: cdktn.booleanToTerraform(struct!.includeIframeOnlyStream),
    manifest_name: cdktn.stringToTerraform(struct!.manifestName),
    program_date_time_interval_seconds: cdktn.numberToTerraform(struct!.programDateTimeIntervalSeconds),
    repeat_ext_x_key: cdktn.booleanToTerraform(struct!.repeatExtXKey),
    stream_selection: mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}


export function mediapackagePackagingConfigurationHlsPackageHlsManifestsToHclTerraform(struct?: MediapackagePackagingConfigurationHlsPackageHlsManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ad_markers: {
      value: cdktn.stringToHclTerraform(struct!.adMarkers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_iframe_only_stream: {
      value: cdktn.booleanToHclTerraform(struct!.includeIframeOnlyStream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manifest_name: {
      value: cdktn.stringToHclTerraform(struct!.manifestName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    program_date_time_interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.programDateTimeIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat_ext_x_key: {
      value: cdktn.booleanToHclTerraform(struct!.repeatExtXKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stream_selection: {
      value: mediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToHclTerraform(struct!.streamSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediapackagePackagingConfigurationHlsPackageHlsManifests | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adMarkers = this._adMarkers;
    }
    if (this._includeIframeOnlyStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIframeOnlyStream = this._includeIframeOnlyStream;
    }
    if (this._manifestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestName = this._manifestName;
    }
    if (this._programDateTimeIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.programDateTimeIntervalSeconds = this._programDateTimeIntervalSeconds;
    }
    if (this._repeatExtXKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatExtXKey = this._repeatExtXKey;
    }
    if (this._streamSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSelection = this._streamSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationHlsPackageHlsManifests | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adMarkers = undefined;
      this._includeIframeOnlyStream = undefined;
      this._manifestName = undefined;
      this._programDateTimeIntervalSeconds = undefined;
      this._repeatExtXKey = undefined;
      this._streamSelection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adMarkers = value.adMarkers;
      this._includeIframeOnlyStream = value.includeIframeOnlyStream;
      this._manifestName = value.manifestName;
      this._programDateTimeIntervalSeconds = value.programDateTimeIntervalSeconds;
      this._repeatExtXKey = value.repeatExtXKey;
      this._streamSelection.internalValue = value.streamSelection;
    }
  }

  // ad_markers - computed: true, optional: true, required: false
  private _adMarkers?: string; 
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }
  public set adMarkers(value: string) {
    this._adMarkers = value;
  }
  public resetAdMarkers() {
    this._adMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adMarkersInput() {
    return this._adMarkers;
  }

  // include_iframe_only_stream - computed: true, optional: true, required: false
  private _includeIframeOnlyStream?: boolean | cdktn.IResolvable; 
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }
  public set includeIframeOnlyStream(value: boolean | cdktn.IResolvable) {
    this._includeIframeOnlyStream = value;
  }
  public resetIncludeIframeOnlyStream() {
    this._includeIframeOnlyStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIframeOnlyStreamInput() {
    return this._includeIframeOnlyStream;
  }

  // manifest_name - computed: true, optional: true, required: false
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  public resetManifestName() {
    this._manifestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
  }

  // program_date_time_interval_seconds - computed: true, optional: true, required: false
  private _programDateTimeIntervalSeconds?: number; 
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }
  public set programDateTimeIntervalSeconds(value: number) {
    this._programDateTimeIntervalSeconds = value;
  }
  public resetProgramDateTimeIntervalSeconds() {
    this._programDateTimeIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programDateTimeIntervalSecondsInput() {
    return this._programDateTimeIntervalSeconds;
  }

  // repeat_ext_x_key - computed: true, optional: true, required: false
  private _repeatExtXKey?: boolean | cdktn.IResolvable; 
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }
  public set repeatExtXKey(value: boolean | cdktn.IResolvable) {
    this._repeatExtXKey = value;
  }
  public resetRepeatExtXKey() {
    this._repeatExtXKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatExtXKeyInput() {
    return this._repeatExtXKey;
  }

  // stream_selection - computed: true, optional: true, required: false
  private _streamSelection = new MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
  public putStreamSelection(value: MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection) {
    this._streamSelection.internalValue = value;
  }
  public resetStreamSelection() {
    this._streamSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSelectionInput() {
    return this._streamSelection.internalValue;
  }
}

export class MediapackagePackagingConfigurationHlsPackageHlsManifestsList extends cdktn.ComplexList {
  public internalValue? : MediapackagePackagingConfigurationHlsPackageHlsManifests[] | cdktn.IResolvable

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
  public get(index: number): MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference {
    return new MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediapackagePackagingConfigurationHlsPackage {
  /**
  * An HTTP Live Streaming (HLS) encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}
  */
  readonly encryption?: MediapackagePackagingConfigurationHlsPackageEncryption;
  /**
  * A list of HLS manifest configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}
  */
  readonly hlsManifests?: MediapackagePackagingConfigurationHlsPackageHlsManifests[] | cdktn.IResolvable;
  /**
  * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#include_dvb_subtitles MediapackagePackagingConfiguration#include_dvb_subtitles}
  */
  readonly includeDvbSubtitles?: boolean | cdktn.IResolvable;
  /**
  * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
  */
  readonly segmentDurationSeconds?: number;
  /**
  * When enabled, audio streams will be placed in rendition groups in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#use_audio_rendition_group MediapackagePackagingConfiguration#use_audio_rendition_group}
  */
  readonly useAudioRenditionGroup?: boolean | cdktn.IResolvable;
}

export function mediapackagePackagingConfigurationHlsPackageToTerraform(struct?: MediapackagePackagingConfigurationHlsPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption: mediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct!.encryption),
    hls_manifests: cdktn.listMapper(mediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform, false)(struct!.hlsManifests),
    include_dvb_subtitles: cdktn.booleanToTerraform(struct!.includeDvbSubtitles),
    segment_duration_seconds: cdktn.numberToTerraform(struct!.segmentDurationSeconds),
    use_audio_rendition_group: cdktn.booleanToTerraform(struct!.useAudioRenditionGroup),
  }
}


export function mediapackagePackagingConfigurationHlsPackageToHclTerraform(struct?: MediapackagePackagingConfigurationHlsPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption: {
      value: mediapackagePackagingConfigurationHlsPackageEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationHlsPackageEncryption",
    },
    hls_manifests: {
      value: cdktn.listMapperHcl(mediapackagePackagingConfigurationHlsPackageHlsManifestsToHclTerraform, false)(struct!.hlsManifests),
      isBlock: true,
      type: "list",
      storageClassType: "MediapackagePackagingConfigurationHlsPackageHlsManifestsList",
    },
    include_dvb_subtitles: {
      value: cdktn.booleanToHclTerraform(struct!.includeDvbSubtitles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.segmentDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_audio_rendition_group: {
      value: cdktn.booleanToHclTerraform(struct!.useAudioRenditionGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationHlsPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationHlsPackage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._hlsManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsManifests = this._hlsManifests?.internalValue;
    }
    if (this._includeDvbSubtitles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDvbSubtitles = this._includeDvbSubtitles;
    }
    if (this._segmentDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentDurationSeconds = this._segmentDurationSeconds;
    }
    if (this._useAudioRenditionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAudioRenditionGroup = this._useAudioRenditionGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationHlsPackage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._hlsManifests.internalValue = undefined;
      this._includeDvbSubtitles = undefined;
      this._segmentDurationSeconds = undefined;
      this._useAudioRenditionGroup = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._hlsManifests.internalValue = value.hlsManifests;
      this._includeDvbSubtitles = value.includeDvbSubtitles;
      this._segmentDurationSeconds = value.segmentDurationSeconds;
      this._useAudioRenditionGroup = value.useAudioRenditionGroup;
    }
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MediapackagePackagingConfigurationHlsPackageEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // hls_manifests - computed: true, optional: true, required: false
  private _hlsManifests = new MediapackagePackagingConfigurationHlsPackageHlsManifestsList(this, "hls_manifests", false);
  public get hlsManifests() {
    return this._hlsManifests;
  }
  public putHlsManifests(value: MediapackagePackagingConfigurationHlsPackageHlsManifests[] | cdktn.IResolvable) {
    this._hlsManifests.internalValue = value;
  }
  public resetHlsManifests() {
    this._hlsManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsManifestsInput() {
    return this._hlsManifests.internalValue;
  }

  // include_dvb_subtitles - computed: true, optional: true, required: false
  private _includeDvbSubtitles?: boolean | cdktn.IResolvable; 
  public get includeDvbSubtitles() {
    return this.getBooleanAttribute('include_dvb_subtitles');
  }
  public set includeDvbSubtitles(value: boolean | cdktn.IResolvable) {
    this._includeDvbSubtitles = value;
  }
  public resetIncludeDvbSubtitles() {
    this._includeDvbSubtitles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDvbSubtitlesInput() {
    return this._includeDvbSubtitles;
  }

  // segment_duration_seconds - computed: true, optional: true, required: false
  private _segmentDurationSeconds?: number; 
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
  public set segmentDurationSeconds(value: number) {
    this._segmentDurationSeconds = value;
  }
  public resetSegmentDurationSeconds() {
    this._segmentDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDurationSecondsInput() {
    return this._segmentDurationSeconds;
  }

  // use_audio_rendition_group - computed: true, optional: true, required: false
  private _useAudioRenditionGroup?: boolean | cdktn.IResolvable; 
  public get useAudioRenditionGroup() {
    return this.getBooleanAttribute('use_audio_rendition_group');
  }
  public set useAudioRenditionGroup(value: boolean | cdktn.IResolvable) {
    this._useAudioRenditionGroup = value;
  }
  public resetUseAudioRenditionGroup() {
    this._useAudioRenditionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAudioRenditionGroupInput() {
    return this._useAudioRenditionGroup;
  }
}
export interface MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
  /**
  * A collection of audio encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}
  */
  readonly presetSpeke20Audio?: string;
  /**
  * A collection of video encryption presets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}
  */
  readonly presetSpeke20Video?: string;
}

export function mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    preset_speke_20_audio: cdktn.stringToTerraform(struct!.presetSpeke20Audio),
    preset_speke_20_video: cdktn.stringToTerraform(struct!.presetSpeke20Video),
  }
}


export function mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    preset_speke_20_audio: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Audio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset_speke_20_video: {
      value: cdktn.stringToHclTerraform(struct!.presetSpeke20Video),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._presetSpeke20Audio !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Audio = this._presetSpeke20Audio;
    }
    if (this._presetSpeke20Video !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetSpeke20Video = this._presetSpeke20Video;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = undefined;
      this._presetSpeke20Video = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._presetSpeke20Audio = value.presetSpeke20Audio;
      this._presetSpeke20Video = value.presetSpeke20Video;
    }
  }

  // preset_speke_20_audio - computed: true, optional: true, required: false
  private _presetSpeke20Audio?: string; 
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }
  public set presetSpeke20Audio(value: string) {
    this._presetSpeke20Audio = value;
  }
  public resetPresetSpeke20Audio() {
    this._presetSpeke20Audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20AudioInput() {
    return this._presetSpeke20Audio;
  }

  // preset_speke_20_video - computed: true, optional: true, required: false
  private _presetSpeke20Video?: string; 
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
  public set presetSpeke20Video(value: string) {
    this._presetSpeke20Video = value;
  }
  public resetPresetSpeke20Video() {
    this._presetSpeke20Video = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetSpeke20VideoInput() {
    return this._presetSpeke20Video;
  }
}
export interface MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
  /**
  * The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}
  */
  readonly encryptionContractConfiguration?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration;
  /**
  * An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The system IDs to include in key requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}
  */
  readonly systemIds?: string[];
  /**
  * The URL of the external key provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}
  */
  readonly url?: string;
}

export function mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption_contract_configuration: mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct!.encryptionContractConfiguration),
    role_arn: cdktn.stringToTerraform(struct!.roleArn),
    system_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.systemIds),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption_contract_configuration: {
      value: mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct!.encryptionContractConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration",
    },
    role_arn: {
      value: cdktn.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.systemIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionContractConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionContractConfiguration = this._encryptionContractConfiguration?.internalValue;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._systemIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIds = this._systemIds;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = undefined;
      this._roleArn = undefined;
      this._systemIds = undefined;
      this._url = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionContractConfiguration.internalValue = value.encryptionContractConfiguration;
      this._roleArn = value.roleArn;
      this._systemIds = value.systemIds;
      this._url = value.url;
    }
  }

  // encryption_contract_configuration - computed: true, optional: true, required: false
  private _encryptionContractConfiguration = new MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }
  public putEncryptionContractConfiguration(value: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration) {
    this._encryptionContractConfiguration.internalValue = value;
  }
  public resetEncryptionContractConfiguration() {
    this._encryptionContractConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionContractConfigurationInput() {
    return this._encryptionContractConfiguration.internalValue;
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // system_ids - computed: true, optional: true, required: false
  private _systemIds?: string[]; 
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }
  public set systemIds(value: string[]) {
    this._systemIds = value;
  }
  public resetSystemIds() {
    this._systemIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdsInput() {
    return this._systemIds;
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
export interface MediapackagePackagingConfigurationMssPackageEncryption {
  /**
  * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}
  */
  readonly spekeKeyProvider?: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider;
}

export function mediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    speke_key_provider: mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct!.spekeKeyProvider),
  }
}


export function mediapackagePackagingConfigurationMssPackageEncryptionToHclTerraform(struct?: MediapackagePackagingConfigurationMssPackageEncryption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    speke_key_provider: {
      value: mediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToHclTerraform(struct!.spekeKeyProvider),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationMssPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationMssPackageEncryption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spekeKeyProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spekeKeyProvider = this._spekeKeyProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationMssPackageEncryption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spekeKeyProvider.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spekeKeyProvider.internalValue = value.spekeKeyProvider;
    }
  }

  // speke_key_provider - computed: true, optional: true, required: false
  private _spekeKeyProvider = new MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
  public putSpekeKeyProvider(value: MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider) {
    this._spekeKeyProvider.internalValue = value;
  }
  public resetSpekeKeyProvider() {
    this._spekeKeyProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spekeKeyProviderInput() {
    return this._spekeKeyProvider.internalValue;
  }
}
export interface MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection {
  /**
  * The maximum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}
  */
  readonly maxVideoBitsPerSecond?: number;
  /**
  * The minimum video bitrate (bps) to include in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}
  */
  readonly minVideoBitsPerSecond?: number;
  /**
  * A directive that determines the order of streams in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}
  */
  readonly streamOrder?: string;
}

export function mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_video_bits_per_second: cdktn.numberToTerraform(struct!.maxVideoBitsPerSecond),
    min_video_bits_per_second: cdktn.numberToTerraform(struct!.minVideoBitsPerSecond),
    stream_order: cdktn.stringToTerraform(struct!.streamOrder),
  }
}


export function mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToHclTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.maxVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_video_bits_per_second: {
      value: cdktn.numberToHclTerraform(struct!.minVideoBitsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_order: {
      value: cdktn.stringToHclTerraform(struct!.streamOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVideoBitsPerSecond = this._maxVideoBitsPerSecond;
    }
    if (this._minVideoBitsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVideoBitsPerSecond = this._minVideoBitsPerSecond;
    }
    if (this._streamOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOrder = this._streamOrder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = undefined;
      this._minVideoBitsPerSecond = undefined;
      this._streamOrder = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVideoBitsPerSecond = value.maxVideoBitsPerSecond;
      this._minVideoBitsPerSecond = value.minVideoBitsPerSecond;
      this._streamOrder = value.streamOrder;
    }
  }

  // max_video_bits_per_second - computed: true, optional: true, required: false
  private _maxVideoBitsPerSecond?: number; 
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }
  public set maxVideoBitsPerSecond(value: number) {
    this._maxVideoBitsPerSecond = value;
  }
  public resetMaxVideoBitsPerSecond() {
    this._maxVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVideoBitsPerSecondInput() {
    return this._maxVideoBitsPerSecond;
  }

  // min_video_bits_per_second - computed: true, optional: true, required: false
  private _minVideoBitsPerSecond?: number; 
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }
  public set minVideoBitsPerSecond(value: number) {
    this._minVideoBitsPerSecond = value;
  }
  public resetMinVideoBitsPerSecond() {
    this._minVideoBitsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVideoBitsPerSecondInput() {
    return this._minVideoBitsPerSecond;
  }

  // stream_order - computed: true, optional: true, required: false
  private _streamOrder?: string; 
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
  public set streamOrder(value: string) {
    this._streamOrder = value;
  }
  public resetStreamOrder() {
    this._streamOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOrderInput() {
    return this._streamOrder;
  }
}
export interface MediapackagePackagingConfigurationMssPackageMssManifests {
  /**
  * An optional string to include in the name of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}
  */
  readonly manifestName?: string;
  /**
  * A StreamSelection configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}
  */
  readonly streamSelection?: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection;
}

export function mediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    manifest_name: cdktn.stringToTerraform(struct!.manifestName),
    stream_selection: mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct!.streamSelection),
  }
}


export function mediapackagePackagingConfigurationMssPackageMssManifestsToHclTerraform(struct?: MediapackagePackagingConfigurationMssPackageMssManifests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    manifest_name: {
      value: cdktn.stringToHclTerraform(struct!.manifestName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_selection: {
      value: mediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToHclTerraform(struct!.streamSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediapackagePackagingConfigurationMssPackageMssManifests | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestName = this._manifestName;
    }
    if (this._streamSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamSelection = this._streamSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationMssPackageMssManifests | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestName = undefined;
      this._streamSelection.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestName = value.manifestName;
      this._streamSelection.internalValue = value.streamSelection;
    }
  }

  // manifest_name - computed: true, optional: true, required: false
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  public resetManifestName() {
    this._manifestName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
  }

  // stream_selection - computed: true, optional: true, required: false
  private _streamSelection = new MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
  public putStreamSelection(value: MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection) {
    this._streamSelection.internalValue = value;
  }
  public resetStreamSelection() {
    this._streamSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSelectionInput() {
    return this._streamSelection.internalValue;
  }
}

export class MediapackagePackagingConfigurationMssPackageMssManifestsList extends cdktn.ComplexList {
  public internalValue? : MediapackagePackagingConfigurationMssPackageMssManifests[] | cdktn.IResolvable

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
  public get(index: number): MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference {
    return new MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MediapackagePackagingConfigurationMssPackage {
  /**
  * A CMAF encryption configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}
  */
  readonly encryption?: MediapackagePackagingConfigurationMssPackageEncryption;
  /**
  * A list of MSS manifest configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#mss_manifests MediapackagePackagingConfiguration#mss_manifests}
  */
  readonly mssManifests?: MediapackagePackagingConfigurationMssPackageMssManifests[] | cdktn.IResolvable;
  /**
  * Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}
  */
  readonly segmentDurationSeconds?: number;
}

export function mediapackagePackagingConfigurationMssPackageToTerraform(struct?: MediapackagePackagingConfigurationMssPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encryption: mediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct!.encryption),
    mss_manifests: cdktn.listMapper(mediapackagePackagingConfigurationMssPackageMssManifestsToTerraform, false)(struct!.mssManifests),
    segment_duration_seconds: cdktn.numberToTerraform(struct!.segmentDurationSeconds),
  }
}


export function mediapackagePackagingConfigurationMssPackageToHclTerraform(struct?: MediapackagePackagingConfigurationMssPackage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encryption: {
      value: mediapackagePackagingConfigurationMssPackageEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "struct",
      storageClassType: "MediapackagePackagingConfigurationMssPackageEncryption",
    },
    mss_manifests: {
      value: cdktn.listMapperHcl(mediapackagePackagingConfigurationMssPackageMssManifestsToHclTerraform, false)(struct!.mssManifests),
      isBlock: true,
      type: "list",
      storageClassType: "MediapackagePackagingConfigurationMssPackageMssManifestsList",
    },
    segment_duration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.segmentDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MediapackagePackagingConfigurationMssPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MediapackagePackagingConfigurationMssPackage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    if (this._mssManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssManifests = this._mssManifests?.internalValue;
    }
    if (this._segmentDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentDurationSeconds = this._segmentDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MediapackagePackagingConfigurationMssPackage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption.internalValue = undefined;
      this._mssManifests.internalValue = undefined;
      this._segmentDurationSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption.internalValue = value.encryption;
      this._mssManifests.internalValue = value.mssManifests;
      this._segmentDurationSeconds = value.segmentDurationSeconds;
    }
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new MediapackagePackagingConfigurationMssPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: MediapackagePackagingConfigurationMssPackageEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // mss_manifests - computed: true, optional: true, required: false
  private _mssManifests = new MediapackagePackagingConfigurationMssPackageMssManifestsList(this, "mss_manifests", false);
  public get mssManifests() {
    return this._mssManifests;
  }
  public putMssManifests(value: MediapackagePackagingConfigurationMssPackageMssManifests[] | cdktn.IResolvable) {
    this._mssManifests.internalValue = value;
  }
  public resetMssManifests() {
    this._mssManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssManifestsInput() {
    return this._mssManifests.internalValue;
  }

  // segment_duration_seconds - computed: true, optional: true, required: false
  private _segmentDurationSeconds?: number; 
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
  public set segmentDurationSeconds(value: number) {
    this._segmentDurationSeconds = value;
  }
  public resetSegmentDurationSeconds() {
    this._segmentDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDurationSecondsInput() {
    return this._segmentDurationSeconds;
  }
}
export interface MediapackagePackagingConfigurationTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}
  */
  readonly value?: string;
}

export function mediapackagePackagingConfigurationTagsToTerraform(struct?: MediapackagePackagingConfigurationTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function mediapackagePackagingConfigurationTagsToHclTerraform(struct?: MediapackagePackagingConfigurationTags | cdktn.IResolvable): any {
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

export class MediapackagePackagingConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MediapackagePackagingConfigurationTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MediapackagePackagingConfigurationTags | cdktn.IResolvable | undefined) {
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

export class MediapackagePackagingConfigurationTagsList extends cdktn.ComplexList {
  public internalValue? : MediapackagePackagingConfigurationTags[] | cdktn.IResolvable

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
  public get(index: number): MediapackagePackagingConfigurationTagsOutputReference {
    return new MediapackagePackagingConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}
*/
export class MediapackagePackagingConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediapackage_packaging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediapackagePackagingConfiguration to import
  * @param importFromId The id of the existing MediapackagePackagingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediapackagePackagingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackage_packaging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediapackagePackagingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MediapackagePackagingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_packaging_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cmafPackage.internalValue = config.cmafPackage;
    this._dashPackage.internalValue = config.dashPackage;
    this._hlsPackage.internalValue = config.hlsPackage;
    this._mssPackage.internalValue = config.mssPackage;
    this._packagingConfigurationId = config.packagingConfigurationId;
    this._packagingGroupId = config.packagingGroupId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cmaf_package - computed: true, optional: true, required: false
  private _cmafPackage = new MediapackagePackagingConfigurationCmafPackageOutputReference(this, "cmaf_package");
  public get cmafPackage() {
    return this._cmafPackage;
  }
  public putCmafPackage(value: MediapackagePackagingConfigurationCmafPackage) {
    this._cmafPackage.internalValue = value;
  }
  public resetCmafPackage() {
    this._cmafPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmafPackageInput() {
    return this._cmafPackage.internalValue;
  }

  // dash_package - computed: true, optional: true, required: false
  private _dashPackage = new MediapackagePackagingConfigurationDashPackageOutputReference(this, "dash_package");
  public get dashPackage() {
    return this._dashPackage;
  }
  public putDashPackage(value: MediapackagePackagingConfigurationDashPackage) {
    this._dashPackage.internalValue = value;
  }
  public resetDashPackage() {
    this._dashPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashPackageInput() {
    return this._dashPackage.internalValue;
  }

  // hls_package - computed: true, optional: true, required: false
  private _hlsPackage = new MediapackagePackagingConfigurationHlsPackageOutputReference(this, "hls_package");
  public get hlsPackage() {
    return this._hlsPackage;
  }
  public putHlsPackage(value: MediapackagePackagingConfigurationHlsPackage) {
    this._hlsPackage.internalValue = value;
  }
  public resetHlsPackage() {
    this._hlsPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsPackageInput() {
    return this._hlsPackage.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mss_package - computed: true, optional: true, required: false
  private _mssPackage = new MediapackagePackagingConfigurationMssPackageOutputReference(this, "mss_package");
  public get mssPackage() {
    return this._mssPackage;
  }
  public putMssPackage(value: MediapackagePackagingConfigurationMssPackage) {
    this._mssPackage.internalValue = value;
  }
  public resetMssPackage() {
    this._mssPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssPackageInput() {
    return this._mssPackage.internalValue;
  }

  // packaging_configuration_id - computed: false, optional: false, required: true
  private _packagingConfigurationId?: string; 
  public get packagingConfigurationId() {
    return this.getStringAttribute('packaging_configuration_id');
  }
  public set packagingConfigurationId(value: string) {
    this._packagingConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingConfigurationIdInput() {
    return this._packagingConfigurationId;
  }

  // packaging_group_id - computed: false, optional: false, required: true
  private _packagingGroupId?: string; 
  public get packagingGroupId() {
    return this.getStringAttribute('packaging_group_id');
  }
  public set packagingGroupId(value: string) {
    this._packagingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagingGroupIdInput() {
    return this._packagingGroupId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new MediapackagePackagingConfigurationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MediapackagePackagingConfigurationTags[] | cdktn.IResolvable) {
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
      cmaf_package: mediapackagePackagingConfigurationCmafPackageToTerraform(this._cmafPackage.internalValue),
      dash_package: mediapackagePackagingConfigurationDashPackageToTerraform(this._dashPackage.internalValue),
      hls_package: mediapackagePackagingConfigurationHlsPackageToTerraform(this._hlsPackage.internalValue),
      mss_package: mediapackagePackagingConfigurationMssPackageToTerraform(this._mssPackage.internalValue),
      packaging_configuration_id: cdktn.stringToTerraform(this._packagingConfigurationId),
      packaging_group_id: cdktn.stringToTerraform(this._packagingGroupId),
      tags: cdktn.listMapper(mediapackagePackagingConfigurationTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cmaf_package: {
        value: mediapackagePackagingConfigurationCmafPackageToHclTerraform(this._cmafPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediapackagePackagingConfigurationCmafPackage",
      },
      dash_package: {
        value: mediapackagePackagingConfigurationDashPackageToHclTerraform(this._dashPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediapackagePackagingConfigurationDashPackage",
      },
      hls_package: {
        value: mediapackagePackagingConfigurationHlsPackageToHclTerraform(this._hlsPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediapackagePackagingConfigurationHlsPackage",
      },
      mss_package: {
        value: mediapackagePackagingConfigurationMssPackageToHclTerraform(this._mssPackage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MediapackagePackagingConfigurationMssPackage",
      },
      packaging_configuration_id: {
        value: cdktn.stringToHclTerraform(this._packagingConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packaging_group_id: {
        value: cdktn.stringToHclTerraform(this._packagingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(mediapackagePackagingConfigurationTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MediapackagePackagingConfigurationTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
