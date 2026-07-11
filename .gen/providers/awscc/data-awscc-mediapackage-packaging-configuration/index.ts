// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackage_packaging_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediapackagePackagingConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackage_packaging_configuration#id DataAwsccMediapackagePackagingConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preset_speke_20_audio - computed: true, optional: false, required: false
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }

  // preset_speke_20_video - computed: true, optional: false, required: false
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_contract_configuration - computed: true, optional: false, required: false
  private _encryptionContractConfiguration = new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption {
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationCmafPackageEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // speke_key_provider - computed: true, optional: false, required: false
  private _spekeKeyProvider = new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
}
export interface DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection {
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests {
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_markers - computed: true, optional: false, required: false
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // repeat_ext_x_key - computed: true, optional: false, required: false
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }

  // stream_selection - computed: true, optional: false, required: false
  private _streamSelection = new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference {
    return new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagePackagingConfigurationCmafPackage {
}

export function dataAwsccMediapackagePackagingConfigurationCmafPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationCmafPackageToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationCmafPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationCmafPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationCmafPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccMediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // hls_manifests - computed: true, optional: false, required: false
  private _hlsManifests = new DataAwsccMediapackagePackagingConfigurationCmafPackageHlsManifestsList(this, "hls_manifests", false);
  public get hlsManifests() {
    return this._hlsManifests;
  }

  // include_encoder_configuration_in_segments - computed: true, optional: false, required: false
  public get includeEncoderConfigurationInSegments() {
    return this.getBooleanAttribute('include_encoder_configuration_in_segments');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection {
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests {
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationDashPackageDashManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_layout - computed: true, optional: false, required: false
  public get manifestLayout() {
    return this.getStringAttribute('manifest_layout');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // min_buffer_time_seconds - computed: true, optional: false, required: false
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // scte_markers_source - computed: true, optional: false, required: false
  public get scteMarkersSource() {
    return this.getStringAttribute('scte_markers_source');
  }

  // stream_selection - computed: true, optional: false, required: false
  private _streamSelection = new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference {
    return new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preset_speke_20_audio - computed: true, optional: false, required: false
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }

  // preset_speke_20_video - computed: true, optional: false, required: false
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_contract_configuration - computed: true, optional: false, required: false
  private _encryptionContractConfiguration = new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationDashPackageEncryption {
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationDashPackageEncryptionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationDashPackageEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationDashPackageEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // speke_key_provider - computed: true, optional: false, required: false
  private _spekeKeyProvider = new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
}
export interface DataAwsccMediapackagePackagingConfigurationDashPackage {
}

export function dataAwsccMediapackagePackagingConfigurationDashPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationDashPackageToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationDashPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationDashPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationDashPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dash_manifests - computed: true, optional: false, required: false
  private _dashManifests = new DataAwsccMediapackagePackagingConfigurationDashPackageDashManifestsList(this, "dash_manifests", false);
  public get dashManifests() {
    return this._dashManifests;
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccMediapackagePackagingConfigurationDashPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // include_encoder_configuration_in_segments - computed: true, optional: false, required: false
  public get includeEncoderConfigurationInSegments() {
    return this.getBooleanAttribute('include_encoder_configuration_in_segments');
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // period_triggers - computed: true, optional: false, required: false
  public get periodTriggers() {
    return this.getListAttribute('period_triggers');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // segment_template_format - computed: true, optional: false, required: false
  public get segmentTemplateFormat() {
    return this.getStringAttribute('segment_template_format');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preset_speke_20_audio - computed: true, optional: false, required: false
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }

  // preset_speke_20_video - computed: true, optional: false, required: false
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_contract_configuration - computed: true, optional: false, required: false
  private _encryptionContractConfiguration = new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption {
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationHlsPackageEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // speke_key_provider - computed: true, optional: false, required: false
  private _spekeKeyProvider = new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
}
export interface DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection {
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests {
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_markers - computed: true, optional: false, required: false
  public get adMarkers() {
    return this.getStringAttribute('ad_markers');
  }

  // include_iframe_only_stream - computed: true, optional: false, required: false
  public get includeIframeOnlyStream() {
    return this.getBooleanAttribute('include_iframe_only_stream');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // repeat_ext_x_key - computed: true, optional: false, required: false
  public get repeatExtXKey() {
    return this.getBooleanAttribute('repeat_ext_x_key');
  }

  // stream_selection - computed: true, optional: false, required: false
  private _streamSelection = new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference {
    return new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagePackagingConfigurationHlsPackage {
}

export function dataAwsccMediapackagePackagingConfigurationHlsPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationHlsPackageToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationHlsPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationHlsPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationHlsPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccMediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // hls_manifests - computed: true, optional: false, required: false
  private _hlsManifests = new DataAwsccMediapackagePackagingConfigurationHlsPackageHlsManifestsList(this, "hls_manifests", false);
  public get hlsManifests() {
    return this._hlsManifests;
  }

  // include_dvb_subtitles - computed: true, optional: false, required: false
  public get includeDvbSubtitles() {
    return this.getBooleanAttribute('include_dvb_subtitles');
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // use_audio_rendition_group - computed: true, optional: false, required: false
  public get useAudioRenditionGroup() {
    return this.getBooleanAttribute('use_audio_rendition_group');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preset_speke_20_audio - computed: true, optional: false, required: false
  public get presetSpeke20Audio() {
    return this.getStringAttribute('preset_speke_20_audio');
  }

  // preset_speke_20_video - computed: true, optional: false, required: false
  public get presetSpeke20Video() {
    return this.getStringAttribute('preset_speke_20_video');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_contract_configuration - computed: true, optional: false, required: false
  private _encryptionContractConfiguration = new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationMssPackageEncryption {
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationMssPackageEncryptionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationMssPackageEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationMssPackageEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // speke_key_provider - computed: true, optional: false, required: false
  private _spekeKeyProvider = new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
}
export interface DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection {
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_video_bits_per_second - computed: true, optional: false, required: false
  public get maxVideoBitsPerSecond() {
    return this.getNumberAttribute('max_video_bits_per_second');
  }

  // min_video_bits_per_second - computed: true, optional: false, required: false
  public get minVideoBitsPerSecond() {
    return this.getNumberAttribute('min_video_bits_per_second');
  }

  // stream_order - computed: true, optional: false, required: false
  public get streamOrder() {
    return this.getStringAttribute('stream_order');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests {
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationMssPackageMssManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // stream_selection - computed: true, optional: false, required: false
  private _streamSelection = new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(this, "stream_selection");
  public get streamSelection() {
    return this._streamSelection;
  }
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference {
    return new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagePackagingConfigurationMssPackage {
}

export function dataAwsccMediapackagePackagingConfigurationMssPackageToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationMssPackageToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationMssPackage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationMssPackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationMssPackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccMediapackagePackagingConfigurationMssPackageEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // mss_manifests - computed: true, optional: false, required: false
  private _mssManifests = new DataAwsccMediapackagePackagingConfigurationMssPackageMssManifestsList(this, "mss_manifests", false);
  public get mssManifests() {
    return this._mssManifests;
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }
}
export interface DataAwsccMediapackagePackagingConfigurationTags {
}

export function dataAwsccMediapackagePackagingConfigurationTagsToTerraform(struct?: DataAwsccMediapackagePackagingConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagePackagingConfigurationTagsToHclTerraform(struct?: DataAwsccMediapackagePackagingConfigurationTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagePackagingConfigurationTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagePackagingConfigurationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagePackagingConfigurationTags | undefined) {
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

export class DataAwsccMediapackagePackagingConfigurationTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagePackagingConfigurationTagsOutputReference {
    return new DataAwsccMediapackagePackagingConfigurationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}
*/
export class DataAwsccMediapackagePackagingConfiguration extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediapackage_packaging_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediapackagePackagingConfiguration to import
  * @param importFromId The id of the existing DataAwsccMediapackagePackagingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediapackagePackagingConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackage_packaging_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackagePackagingConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackagePackagingConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackage_packaging_configuration',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cmaf_package - computed: true, optional: false, required: false
  private _cmafPackage = new DataAwsccMediapackagePackagingConfigurationCmafPackageOutputReference(this, "cmaf_package");
  public get cmafPackage() {
    return this._cmafPackage;
  }

  // dash_package - computed: true, optional: false, required: false
  private _dashPackage = new DataAwsccMediapackagePackagingConfigurationDashPackageOutputReference(this, "dash_package");
  public get dashPackage() {
    return this._dashPackage;
  }

  // hls_package - computed: true, optional: false, required: false
  private _hlsPackage = new DataAwsccMediapackagePackagingConfigurationHlsPackageOutputReference(this, "hls_package");
  public get hlsPackage() {
    return this._hlsPackage;
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

  // mss_package - computed: true, optional: false, required: false
  private _mssPackage = new DataAwsccMediapackagePackagingConfigurationMssPackageOutputReference(this, "mss_package");
  public get mssPackage() {
    return this._mssPackage;
  }

  // packaging_configuration_id - computed: true, optional: false, required: false
  public get packagingConfigurationId() {
    return this.getStringAttribute('packaging_configuration_id');
  }

  // packaging_group_id - computed: true, optional: false, required: false
  public get packagingGroupId() {
    return this.getStringAttribute('packaging_group_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediapackagePackagingConfigurationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
