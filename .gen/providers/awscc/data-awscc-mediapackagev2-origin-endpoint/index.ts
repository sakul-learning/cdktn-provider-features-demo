// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackagev2_origin_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccMediapackagev2OriginEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackagev2_origin_endpoint#id DataAwsccMediapackagev2OriginEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fixed_availability_start_time - computed: true, optional: false, required: false
  public get fixedAvailabilityStartTime() {
    return this.getStringAttribute('fixed_availability_start_time');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dvb_priority - computed: true, optional: false, required: false
  public get dvbPriority() {
    return this.getNumberAttribute('dvb_priority');
  }

  // dvb_weight - computed: true, optional: false, required: false
  public get dvbWeight() {
    return this.getNumberAttribute('dvb_weight');
  }

  // service_location - computed: true, optional: false, required: false
  public get serviceLocation() {
    return this.getStringAttribute('service_location');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // probability - computed: true, optional: false, required: false
  public get probability() {
    return this.getNumberAttribute('probability');
  }

  // reporting_url - computed: true, optional: false, required: false
  public get reportingUrl() {
    return this.getStringAttribute('reporting_url');
  }
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // font_family - computed: true, optional: false, required: false
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_metrics - computed: true, optional: false, required: false
  private _errorMetrics = new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList(this, "error_metrics", false);
  public get errorMetrics() {
    return this._errorMetrics;
  }

  // font_download - computed: true, optional: false, required: false
  private _fontDownload = new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference(this, "font_download");
  public get fontDownload() {
    return this._fontDownload;
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clip_start_time - computed: true, optional: false, required: false
  public get clipStartTime() {
    return this.getStringAttribute('clip_start_time');
  }

  // drm_settings - computed: true, optional: false, required: false
  public get drmSettings() {
    return this.getStringAttribute('drm_settings');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // manifest_filter - computed: true, optional: false, required: false
  public get manifestFilter() {
    return this.getStringAttribute('manifest_filter');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // time_delay_seconds - computed: true, optional: false, required: false
  public get timeDelaySeconds() {
    return this.getNumberAttribute('time_delay_seconds');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copyright - computed: true, optional: false, required: false
  public get copyright() {
    return this.getStringAttribute('copyright');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // more_information_url - computed: true, optional: false, required: false
  public get moreInformationUrl() {
    return this.getStringAttribute('more_information_url');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsScteDashToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsScteDashToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsScteDash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_marker_dash - computed: true, optional: false, required: false
  public get adMarkerDash() {
    return this.getStringAttribute('ad_marker_dash');
  }

  // scte_in_manifests - computed: true, optional: false, required: false
  public get scteInManifests() {
    return this.getStringAttribute('scte_in_manifests');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ttml_profile - computed: true, optional: false, required: false
  public get ttmlProfile() {
    return this.getStringAttribute('ttml_profile');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ttml_configuration - computed: true, optional: false, required: false
  private _ttmlConfiguration = new DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference(this, "ttml_configuration");
  public get ttmlConfiguration() {
    return this._ttmlConfiguration;
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timing_mode - computed: true, optional: false, required: false
  public get timingMode() {
    return this.getStringAttribute('timing_mode');
  }

  // timing_source - computed: true, optional: false, required: false
  public get timingSource() {
    return this.getStringAttribute('timing_source');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointDashManifests {
}

export function dataAwsccMediapackagev2OriginEndpointDashManifestsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointDashManifestsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointDashManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointDashManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointDashManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_timeline_pattern - computed: true, optional: false, required: false
  public get audioTimelinePattern() {
    return this.getStringAttribute('audio_timeline_pattern');
  }

  // availability_start_time_configuration - computed: true, optional: false, required: false
  private _availabilityStartTimeConfiguration = new DataAwsccMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference(this, "availability_start_time_configuration");
  public get availabilityStartTimeConfiguration() {
    return this._availabilityStartTimeConfiguration;
  }

  // base_urls - computed: true, optional: false, required: false
  private _baseUrls = new DataAwsccMediapackagev2OriginEndpointDashManifestsBaseUrlsList(this, "base_urls", false);
  public get baseUrls() {
    return this._baseUrls;
  }

  // compactness - computed: true, optional: false, required: false
  public get compactness() {
    return this.getStringAttribute('compactness');
  }

  // drm_signaling - computed: true, optional: false, required: false
  public get drmSignaling() {
    return this.getStringAttribute('drm_signaling');
  }

  // dvb_settings - computed: true, optional: false, required: false
  private _dvbSettings = new DataAwsccMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference(this, "dvb_settings");
  public get dvbSettings() {
    return this._dvbSettings;
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // min_buffer_time_seconds - computed: true, optional: false, required: false
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }

  // min_update_period_seconds - computed: true, optional: false, required: false
  public get minUpdatePeriodSeconds() {
    return this.getNumberAttribute('min_update_period_seconds');
  }

  // period_triggers - computed: true, optional: false, required: false
  public get periodTriggers() {
    return this.getListAttribute('period_triggers');
  }

  // profiles - computed: true, optional: false, required: false
  public get profiles() {
    return this.getListAttribute('profiles');
  }

  // program_information - computed: true, optional: false, required: false
  private _programInformation = new DataAwsccMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference(this, "program_information");
  public get programInformation() {
    return this._programInformation;
  }

  // scte_dash - computed: true, optional: false, required: false
  private _scteDash = new DataAwsccMediapackagev2OriginEndpointDashManifestsScteDashOutputReference(this, "scte_dash");
  public get scteDash() {
    return this._scteDash;
  }

  // segment_template_format - computed: true, optional: false, required: false
  public get segmentTemplateFormat() {
    return this.getStringAttribute('segment_template_format');
  }

  // subtitle_configuration - computed: true, optional: false, required: false
  private _subtitleConfiguration = new DataAwsccMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference(this, "subtitle_configuration");
  public get subtitleConfiguration() {
    return this._subtitleConfiguration;
  }

  // suggested_presentation_delay_seconds - computed: true, optional: false, required: false
  public get suggestedPresentationDelaySeconds() {
    return this.getNumberAttribute('suggested_presentation_delay_seconds');
  }

  // uri_path_type - computed: true, optional: false, required: false
  public get uriPathType() {
    return this.getStringAttribute('uri_path_type');
  }

  // utc_timing - computed: true, optional: false, required: false
  private _utcTiming = new DataAwsccMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference(this, "utc_timing");
  public get utcTiming() {
    return this._utcTiming;
  }
}

export class DataAwsccMediapackagev2OriginEndpointDashManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointDashManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_error_conditions - computed: true, optional: false, required: false
  public get endpointErrorConditions() {
    return this.getListAttribute('endpoint_error_conditions');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clip_start_time - computed: true, optional: false, required: false
  public get clipStartTime() {
    return this.getStringAttribute('clip_start_time');
  }

  // drm_settings - computed: true, optional: false, required: false
  public get drmSettings() {
    return this.getStringAttribute('drm_settings');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // manifest_filter - computed: true, optional: false, required: false
  public get manifestFilter() {
    return this.getStringAttribute('manifest_filter');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // time_delay_seconds - computed: true, optional: false, required: false
  public get timeDelaySeconds() {
    return this.getNumberAttribute('time_delay_seconds');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls {
}

export function dataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_marker_hls - computed: true, optional: false, required: false
  public get adMarkerHls() {
    return this.getStringAttribute('ad_marker_hls');
  }

  // scte_in_manifests - computed: true, optional: false, required: false
  public get scteInManifests() {
    return this.getStringAttribute('scte_in_manifests');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag {
}

export function dataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // precise - computed: true, optional: false, required: false
  public get precise() {
    return this.getBooleanAttribute('precise');
  }

  // time_offset - computed: true, optional: false, required: false
  public get timeOffset() {
    return this.getNumberAttribute('time_offset');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointHlsManifests {
}

export function dataAwsccMediapackagev2OriginEndpointHlsManifestsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointHlsManifestsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointHlsManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointHlsManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_manifest_name - computed: true, optional: false, required: false
  public get childManifestName() {
    return this.getStringAttribute('child_manifest_name');
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // scte_hls - computed: true, optional: false, required: false
  private _scteHls = new DataAwsccMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference(this, "scte_hls");
  public get scteHls() {
    return this._scteHls;
  }

  // start_tag - computed: true, optional: false, required: false
  private _startTag = new DataAwsccMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference(this, "start_tag");
  public get startTag() {
    return this._startTag;
  }

  // uri_path_type - computed: true, optional: false, required: false
  public get uriPathType() {
    return this.getStringAttribute('uri_path_type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // url_encode_child_manifest - computed: true, optional: false, required: false
  public get urlEncodeChildManifest() {
    return this.getBooleanAttribute('url_encode_child_manifest');
  }
}

export class DataAwsccMediapackagev2OriginEndpointHlsManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointHlsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clip_start_time - computed: true, optional: false, required: false
  public get clipStartTime() {
    return this.getStringAttribute('clip_start_time');
  }

  // drm_settings - computed: true, optional: false, required: false
  public get drmSettings() {
    return this.getStringAttribute('drm_settings');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // manifest_filter - computed: true, optional: false, required: false
  public get manifestFilter() {
    return this.getStringAttribute('manifest_filter');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // time_delay_seconds - computed: true, optional: false, required: false
  public get timeDelaySeconds() {
    return this.getNumberAttribute('time_delay_seconds');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls {
}

export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_marker_hls - computed: true, optional: false, required: false
  public get adMarkerHls() {
    return this.getStringAttribute('ad_marker_hls');
  }

  // scte_in_manifests - computed: true, optional: false, required: false
  public get scteInManifests() {
    return this.getStringAttribute('scte_in_manifests');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag {
}

export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // precise - computed: true, optional: false, required: false
  public get precise() {
    return this.getBooleanAttribute('precise');
  }

  // time_offset - computed: true, optional: false, required: false
  public get timeOffset() {
    return this.getNumberAttribute('time_offset');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests {
}

export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child_manifest_name - computed: true, optional: false, required: false
  public get childManifestName() {
    return this.getStringAttribute('child_manifest_name');
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // program_date_time_interval_seconds - computed: true, optional: false, required: false
  public get programDateTimeIntervalSeconds() {
    return this.getNumberAttribute('program_date_time_interval_seconds');
  }

  // scte_hls - computed: true, optional: false, required: false
  private _scteHls = new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference(this, "scte_hls");
  public get scteHls() {
    return this._scteHls;
  }

  // start_tag - computed: true, optional: false, required: false
  private _startTag = new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference(this, "start_tag");
  public get startTag() {
    return this._startTag;
  }

  // uri_path_type - computed: true, optional: false, required: false
  public get uriPathType() {
    return this.getStringAttribute('uri_path_type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // url_encode_child_manifest - computed: true, optional: false, required: false
  public get urlEncodeChildManifest() {
    return this.getBooleanAttribute('url_encode_child_manifest');
  }
}

export class DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clip_start_time - computed: true, optional: false, required: false
  public get clipStartTime() {
    return this.getStringAttribute('clip_start_time');
  }

  // drm_settings - computed: true, optional: false, required: false
  public get drmSettings() {
    return this.getStringAttribute('drm_settings');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }

  // manifest_filter - computed: true, optional: false, required: false
  public get manifestFilter() {
    return this.getStringAttribute('manifest_filter');
  }

  // start - computed: true, optional: false, required: false
  public get start() {
    return this.getStringAttribute('start');
  }

  // time_delay_seconds - computed: true, optional: false, required: false
  public get timeDelaySeconds() {
    return this.getNumberAttribute('time_delay_seconds');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointMssManifests {
}

export function dataAwsccMediapackagev2OriginEndpointMssManifestsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointMssManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointMssManifestsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointMssManifests): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointMssManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointMssManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_configuration - computed: true, optional: false, required: false
  private _filterConfiguration = new DataAwsccMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference(this, "filter_configuration");
  public get filterConfiguration() {
    return this._filterConfiguration;
  }

  // manifest_layout - computed: true, optional: false, required: false
  public get manifestLayout() {
    return this.getStringAttribute('manifest_layout');
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }
}

export class DataAwsccMediapackagev2OriginEndpointMssManifestsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointMssManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod {
}

export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmaf_encryption_method - computed: true, optional: false, required: false
  public get cmafEncryptionMethod() {
    return this.getStringAttribute('cmaf_encryption_method');
  }

  // ism_encryption_method - computed: true, optional: false, required: false
  public get ismEncryptionMethod() {
    return this.getStringAttribute('ism_encryption_method');
  }

  // ts_encryption_method - computed: true, optional: false, required: false
  public get tsEncryptionMethod() {
    return this.getStringAttribute('ts_encryption_method');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration {
}

export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration | undefined) {
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
export interface DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider {
}

export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // drm_systems - computed: true, optional: false, required: false
  public get drmSystems() {
    return this.getListAttribute('drm_systems');
  }

  // encryption_contract_configuration - computed: true, optional: false, required: false
  private _encryptionContractConfiguration = new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(this, "encryption_contract_configuration");
  public get encryptionContractConfiguration() {
    return this._encryptionContractConfiguration;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointSegmentEncryption {
}

export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointSegmentEncryptionToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentEncryption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointSegmentEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointSegmentEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmaf_exclude_segment_drm_metadata - computed: true, optional: false, required: false
  public get cmafExcludeSegmentDrmMetadata() {
    return this.getBooleanAttribute('cmaf_exclude_segment_drm_metadata');
  }

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // encryption_method - computed: true, optional: false, required: false
  private _encryptionMethod = new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference(this, "encryption_method");
  public get encryptionMethod() {
    return this._encryptionMethod;
  }

  // key_rotation_interval_seconds - computed: true, optional: false, required: false
  public get keyRotationIntervalSeconds() {
    return this.getNumberAttribute('key_rotation_interval_seconds');
  }

  // speke_key_provider - computed: true, optional: false, required: false
  private _spekeKeyProvider = new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference(this, "speke_key_provider");
  public get spekeKeyProvider() {
    return this._spekeKeyProvider;
  }
}
export interface DataAwsccMediapackagev2OriginEndpointSegmentScte {
}

export function dataAwsccMediapackagev2OriginEndpointSegmentScteToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentScte): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointSegmentScteToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegmentScte): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointSegmentScte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointSegmentScte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_ad_types - computed: true, optional: false, required: false
  public get customAdTypes() {
    return this.getListAttribute('custom_ad_types');
  }

  // scte_filter - computed: true, optional: false, required: false
  public get scteFilter() {
    return this.getListAttribute('scte_filter');
  }

  // scte_in_segments - computed: true, optional: false, required: false
  public get scteInSegments() {
    return this.getStringAttribute('scte_in_segments');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointSegment {
}

export function dataAwsccMediapackagev2OriginEndpointSegmentToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointSegmentToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointSegment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointSegmentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption - computed: true, optional: false, required: false
  private _encryption = new DataAwsccMediapackagev2OriginEndpointSegmentEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }

  // include_iframe_only_streams - computed: true, optional: false, required: false
  public get includeIframeOnlyStreams() {
    return this.getBooleanAttribute('include_iframe_only_streams');
  }

  // scte - computed: true, optional: false, required: false
  private _scte = new DataAwsccMediapackagev2OriginEndpointSegmentScteOutputReference(this, "scte");
  public get scte() {
    return this._scte;
  }

  // segment_duration_seconds - computed: true, optional: false, required: false
  public get segmentDurationSeconds() {
    return this.getNumberAttribute('segment_duration_seconds');
  }

  // segment_name - computed: true, optional: false, required: false
  public get segmentName() {
    return this.getStringAttribute('segment_name');
  }

  // ts_include_dvb_subtitles - computed: true, optional: false, required: false
  public get tsIncludeDvbSubtitles() {
    return this.getBooleanAttribute('ts_include_dvb_subtitles');
  }

  // ts_use_audio_rendition_group - computed: true, optional: false, required: false
  public get tsUseAudioRenditionGroup() {
    return this.getBooleanAttribute('ts_use_audio_rendition_group');
  }
}
export interface DataAwsccMediapackagev2OriginEndpointTags {
}

export function dataAwsccMediapackagev2OriginEndpointTagsToTerraform(struct?: DataAwsccMediapackagev2OriginEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccMediapackagev2OriginEndpointTagsToHclTerraform(struct?: DataAwsccMediapackagev2OriginEndpointTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccMediapackagev2OriginEndpointTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccMediapackagev2OriginEndpointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccMediapackagev2OriginEndpointTags | undefined) {
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

export class DataAwsccMediapackagev2OriginEndpointTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccMediapackagev2OriginEndpointTagsOutputReference {
    return new DataAwsccMediapackagev2OriginEndpointTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}
*/
export class DataAwsccMediapackagev2OriginEndpoint extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_mediapackagev2_origin_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccMediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccMediapackagev2OriginEndpoint to import
  * @param importFromId The id of the existing DataAwsccMediapackagev2OriginEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccMediapackagev2OriginEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediapackagev2_origin_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediapackagev2OriginEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediapackagev2OriginEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediapackagev2_origin_endpoint',
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

  // channel_group_name - computed: true, optional: false, required: false
  public get channelGroupName() {
    return this.getStringAttribute('channel_group_name');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // container_type - computed: true, optional: false, required: false
  public get containerType() {
    return this.getStringAttribute('container_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dash_manifest_urls - computed: true, optional: false, required: false
  public get dashManifestUrls() {
    return this.getListAttribute('dash_manifest_urls');
  }

  // dash_manifests - computed: true, optional: false, required: false
  private _dashManifests = new DataAwsccMediapackagev2OriginEndpointDashManifestsList(this, "dash_manifests", false);
  public get dashManifests() {
    return this._dashManifests;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // force_endpoint_error_configuration - computed: true, optional: false, required: false
  private _forceEndpointErrorConfiguration = new DataAwsccMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference(this, "force_endpoint_error_configuration");
  public get forceEndpointErrorConfiguration() {
    return this._forceEndpointErrorConfiguration;
  }

  // hls_manifest_urls - computed: true, optional: false, required: false
  public get hlsManifestUrls() {
    return this.getListAttribute('hls_manifest_urls');
  }

  // hls_manifests - computed: true, optional: false, required: false
  private _hlsManifests = new DataAwsccMediapackagev2OriginEndpointHlsManifestsList(this, "hls_manifests", false);
  public get hlsManifests() {
    return this._hlsManifests;
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

  // low_latency_hls_manifest_urls - computed: true, optional: false, required: false
  public get lowLatencyHlsManifestUrls() {
    return this.getListAttribute('low_latency_hls_manifest_urls');
  }

  // low_latency_hls_manifests - computed: true, optional: false, required: false
  private _lowLatencyHlsManifests = new DataAwsccMediapackagev2OriginEndpointLowLatencyHlsManifestsList(this, "low_latency_hls_manifests", false);
  public get lowLatencyHlsManifests() {
    return this._lowLatencyHlsManifests;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // mss_manifest_urls - computed: true, optional: false, required: false
  public get mssManifestUrls() {
    return this.getListAttribute('mss_manifest_urls');
  }

  // mss_manifests - computed: true, optional: false, required: false
  private _mssManifests = new DataAwsccMediapackagev2OriginEndpointMssManifestsList(this, "mss_manifests", false);
  public get mssManifests() {
    return this._mssManifests;
  }

  // origin_endpoint_name - computed: true, optional: false, required: false
  public get originEndpointName() {
    return this.getStringAttribute('origin_endpoint_name');
  }

  // segment - computed: true, optional: false, required: false
  private _segment = new DataAwsccMediapackagev2OriginEndpointSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }

  // startover_window_seconds - computed: true, optional: false, required: false
  public get startoverWindowSeconds() {
    return this.getNumberAttribute('startover_window_seconds');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccMediapackagev2OriginEndpointTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // uri_separator - computed: true, optional: false, required: false
  public get uriSeparator() {
    return this.getStringAttribute('uri_separator');
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
