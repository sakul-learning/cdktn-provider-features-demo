// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_inbound_external_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccRtbfabricInboundExternalLinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_inbound_external_link#id DataAwsccRtbfabricInboundExternalLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking {
}

export function dataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingToTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingToHclTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking | undefined) {
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

export class DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference {
    return new DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccRtbfabricInboundExternalLinkLinkAttributes {
}

export function dataAwsccRtbfabricInboundExternalLinkLinkAttributesToTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricInboundExternalLinkLinkAttributesToHclTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricInboundExternalLinkLinkAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricInboundExternalLinkLinkAttributes | undefined) {
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
  private _responderErrorMasking = new DataAwsccRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList(this, "responder_error_masking", false);
  public get responderErrorMasking() {
    return this._responderErrorMasking;
  }
}
export interface DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
}

export function dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToHclTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | undefined) {
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
export interface DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs {
}

export function dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsToTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsToHclTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // link_application_log_sampling - computed: true, optional: false, required: false
  private _linkApplicationLogSampling = new DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(this, "link_application_log_sampling");
  public get linkApplicationLogSampling() {
    return this._linkApplicationLogSampling;
  }
}
export interface DataAwsccRtbfabricInboundExternalLinkLinkLogSettings {
}

export function dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsToTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricInboundExternalLinkLinkLogSettingsToHclTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkLinkLogSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccRtbfabricInboundExternalLinkLinkLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricInboundExternalLinkLinkLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_logs - computed: true, optional: false, required: false
  private _applicationLogs = new DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(this, "application_logs");
  public get applicationLogs() {
    return this._applicationLogs;
  }
}
export interface DataAwsccRtbfabricInboundExternalLinkTags {
}

export function dataAwsccRtbfabricInboundExternalLinkTagsToTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccRtbfabricInboundExternalLinkTagsToHclTerraform(struct?: DataAwsccRtbfabricInboundExternalLinkTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccRtbfabricInboundExternalLinkTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccRtbfabricInboundExternalLinkTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccRtbfabricInboundExternalLinkTags | undefined) {
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

export class DataAwsccRtbfabricInboundExternalLinkTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccRtbfabricInboundExternalLinkTagsOutputReference {
    return new DataAwsccRtbfabricInboundExternalLinkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link}
*/
export class DataAwsccRtbfabricInboundExternalLink extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rtbfabric_inbound_external_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccRtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccRtbfabricInboundExternalLink to import
  * @param importFromId The id of the existing DataAwsccRtbfabricInboundExternalLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_inbound_external_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccRtbfabricInboundExternalLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_inbound_external_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccRtbfabricInboundExternalLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccRtbfabricInboundExternalLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rtbfabric_inbound_external_link',
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

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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
  private _linkAttributes = new DataAwsccRtbfabricInboundExternalLinkLinkAttributesOutputReference(this, "link_attributes");
  public get linkAttributes() {
    return this._linkAttributes;
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // link_log_settings - computed: true, optional: false, required: false
  private _linkLogSettings = new DataAwsccRtbfabricInboundExternalLinkLinkLogSettingsOutputReference(this, "link_log_settings");
  public get linkLogSettings() {
    return this._linkLogSettings;
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccRtbfabricInboundExternalLinkTagsList(this, "tags", true);
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
