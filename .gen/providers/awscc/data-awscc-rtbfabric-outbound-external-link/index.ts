// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/rtbfabric_outbound_external_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRtbfabricOutboundExternalLinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/rtbfabric_outbound_external_link#id DataAwsccRtbfabricOutboundExternalLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking {
}

export function dataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingToTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingToHclTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // http_code - computed: true, optional: false, required: false
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }

  // logging_types - computed: true, optional: false, required: false
  public get loggingTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('logging_types'));
  }

  // response_logging_percentage - computed: true, optional: false, required: false
  public get responseLoggingPercentage() {
    return this.getNumberAttribute('response_logging_percentage');
  }
}

export class DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference {
    return new DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricOutboundExternalLinkLinkAttributes {
}

export function dataAwsccRtbfabricOutboundExternalLinkLinkAttributesToTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricOutboundExternalLinkLinkAttributesToHclTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricOutboundExternalLinkLinkAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricOutboundExternalLinkLinkAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_provided_id - computed: true, optional: false, required: false
  public get customerProvidedId() {
    return this.getStringAttribute('customer_provided_id');
  }

  // responder_error_masking - computed: true, optional: false, required: false
  private _responderErrorMasking = new DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList(this, "responder_error_masking", false);
  public get responderErrorMasking() {
    return this._responderErrorMasking;
  }
}
export interface DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
}

export function dataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToHclTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_log - computed: true, optional: false, required: false
  public get errorLog() {
    return this.getNumberAttribute('error_log');
  }

  // filter_log - computed: true, optional: false, required: false
  public get filterLog() {
    return this.getNumberAttribute('filter_log');
  }
}
export interface DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs {
}

export function dataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsToTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsToHclTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_application_log_sampling - computed: true, optional: false, required: false
  private _linkApplicationLogSampling = new DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(this, "link_application_log_sampling");
  public get linkApplicationLogSampling() {
    return this._linkApplicationLogSampling;
  }
}
export interface DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings {
}

export function dataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsToTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsToHclTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_logs - computed: true, optional: false, required: false
  private _applicationLogs = new DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(this, "application_logs");
  public get applicationLogs() {
    return this._applicationLogs;
  }
}
export interface DataAwsccRtbfabricOutboundExternalLinkTags {
}

export function dataAwsccRtbfabricOutboundExternalLinkTagsToTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricOutboundExternalLinkTagsToHclTerraform(struct?: DataAwsccRtbfabricOutboundExternalLinkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricOutboundExternalLinkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricOutboundExternalLinkTags | undefined) {
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

export class DataAwsccRtbfabricOutboundExternalLinkTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference {
    return new DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/rtbfabric_outbound_external_link awscc_rtbfabric_outbound_external_link}
*/
export class DataAwsccRtbfabricOutboundExternalLink extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rtbfabric_outbound_external_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRtbfabricOutboundExternalLink to import
  * @param importFromId The id of the existing DataAwsccRtbfabricOutboundExternalLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/rtbfabric_outbound_external_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRtbfabricOutboundExternalLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_outbound_external_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/rtbfabric_outbound_external_link awscc_rtbfabric_outbound_external_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRtbfabricOutboundExternalLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRtbfabricOutboundExternalLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rtbfabric_outbound_external_link',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
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

  // link_attributes - computed: true, optional: false, required: false
  private _linkAttributes = new DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference(this, "link_attributes");
  public get linkAttributes() {
    return this._linkAttributes;
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // link_log_settings - computed: true, optional: false, required: false
  private _linkLogSettings = new DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference(this, "link_log_settings");
  public get linkLogSettings() {
    return this._linkLogSettings;
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRtbfabricOutboundExternalLinkTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }

  // updated_timestamp - computed: true, optional: false, required: false
  public get updatedTimestamp() {
    return this.getStringAttribute('updated_timestamp');
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
