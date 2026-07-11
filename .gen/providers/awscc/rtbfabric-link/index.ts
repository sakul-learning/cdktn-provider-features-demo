// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RtbfabricLinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#gateway_id RtbfabricLink#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#http_responder_allowed RtbfabricLink#http_responder_allowed}
  */
  readonly httpResponderAllowed?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#link_attributes RtbfabricLink#link_attributes}
  */
  readonly linkAttributes?: RtbfabricLinkLinkAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#link_log_settings RtbfabricLink#link_log_settings}
  */
  readonly linkLogSettings: RtbfabricLinkLinkLogSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#module_configuration_list RtbfabricLink#module_configuration_list}
  */
  readonly moduleConfigurationList?: RtbfabricLinkModuleConfigurationListStruct[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#peer_gateway_id RtbfabricLink#peer_gateway_id}
  */
  readonly peerGatewayId: string;
  /**
  * Tags to assign to the Link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#tags RtbfabricLink#tags}
  */
  readonly tags?: RtbfabricLinkTags[] | cdktn.IResolvable;
}
export interface RtbfabricLinkLinkAttributesResponderErrorMasking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#http_code RtbfabricLink#http_code}
  */
  readonly httpCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#logging_types RtbfabricLink#logging_types}
  */
  readonly loggingTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#response_logging_percentage RtbfabricLink#response_logging_percentage}
  */
  readonly responseLoggingPercentage?: number;
}

export function rtbfabricLinkLinkAttributesResponderErrorMaskingToTerraform(struct?: RtbfabricLinkLinkAttributesResponderErrorMasking | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    http_code: cdktn.stringToTerraform(struct!.httpCode),
    logging_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.loggingTypes),
    response_logging_percentage: cdktn.numberToTerraform(struct!.responseLoggingPercentage),
  }
}


export function rtbfabricLinkLinkAttributesResponderErrorMaskingToHclTerraform(struct?: RtbfabricLinkLinkAttributesResponderErrorMasking | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_code: {
      value: cdktn.stringToHclTerraform(struct!.httpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.loggingTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_logging_percentage: {
      value: cdktn.numberToHclTerraform(struct!.responseLoggingPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RtbfabricLinkLinkAttributesResponderErrorMasking | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._httpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode = this._httpCode;
    }
    if (this._loggingTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingTypes = this._loggingTypes;
    }
    if (this._responseLoggingPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseLoggingPercentage = this._responseLoggingPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkLinkAttributesResponderErrorMasking | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._httpCode = undefined;
      this._loggingTypes = undefined;
      this._responseLoggingPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._httpCode = value.httpCode;
      this._loggingTypes = value.loggingTypes;
      this._responseLoggingPercentage = value.responseLoggingPercentage;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // http_code - computed: true, optional: true, required: false
  private _httpCode?: string;
  public get httpCode() {
    return this.getStringAttribute('http_code');
  }
  public set httpCode(value: string) {
    this._httpCode = value;
  }
  public resetHttpCode() {
    this._httpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeInput() {
    return this._httpCode;
  }

  // logging_types - computed: true, optional: true, required: false
  private _loggingTypes?: string[];
  public get loggingTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('logging_types'));
  }
  public set loggingTypes(value: string[]) {
    this._loggingTypes = value;
  }
  public resetLoggingTypes() {
    this._loggingTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTypesInput() {
    return this._loggingTypes;
  }

  // response_logging_percentage - computed: true, optional: true, required: false
  private _responseLoggingPercentage?: number;
  public get responseLoggingPercentage() {
    return this.getNumberAttribute('response_logging_percentage');
  }
  public set responseLoggingPercentage(value: number) {
    this._responseLoggingPercentage = value;
  }
  public resetResponseLoggingPercentage() {
    this._responseLoggingPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseLoggingPercentageInput() {
    return this._responseLoggingPercentage;
  }
}

export class RtbfabricLinkLinkAttributesResponderErrorMaskingList extends cdktn.ComplexList {
  public internalValue? : RtbfabricLinkLinkAttributesResponderErrorMasking[] | cdktn.IResolvable

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
  public get(index: number): RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference {
    return new RtbfabricLinkLinkAttributesResponderErrorMaskingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RtbfabricLinkLinkAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#customer_provided_id RtbfabricLink#customer_provided_id}
  */
  readonly customerProvidedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#responder_error_masking RtbfabricLink#responder_error_masking}
  */
  readonly responderErrorMasking?: RtbfabricLinkLinkAttributesResponderErrorMasking[] | cdktn.IResolvable;
}

export function rtbfabricLinkLinkAttributesToTerraform(struct?: RtbfabricLinkLinkAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    customer_provided_id: cdktn.stringToTerraform(struct!.customerProvidedId),
    responder_error_masking: cdktn.listMapper(rtbfabricLinkLinkAttributesResponderErrorMaskingToTerraform, false)(struct!.responderErrorMasking),
  }
}


export function rtbfabricLinkLinkAttributesToHclTerraform(struct?: RtbfabricLinkLinkAttributes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    customer_provided_id: {
      value: cdktn.stringToHclTerraform(struct!.customerProvidedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_error_masking: {
      value: cdktn.listMapperHcl(rtbfabricLinkLinkAttributesResponderErrorMaskingToHclTerraform, false)(struct!.responderErrorMasking),
      isBlock: true,
      type: "list",
      storageClassType: "RtbfabricLinkLinkAttributesResponderErrorMaskingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkLinkAttributesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkLinkAttributes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerProvidedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerProvidedId = this._customerProvidedId;
    }
    if (this._responderErrorMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderErrorMasking = this._responderErrorMasking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkLinkAttributes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerProvidedId = undefined;
      this._responderErrorMasking.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerProvidedId = value.customerProvidedId;
      this._responderErrorMasking.internalValue = value.responderErrorMasking;
    }
  }

  // customer_provided_id - computed: true, optional: true, required: false
  private _customerProvidedId?: string;
  public get customerProvidedId() {
    return this.getStringAttribute('customer_provided_id');
  }
  public set customerProvidedId(value: string) {
    this._customerProvidedId = value;
  }
  public resetCustomerProvidedId() {
    this._customerProvidedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProvidedIdInput() {
    return this._customerProvidedId;
  }

  // responder_error_masking - computed: true, optional: true, required: false
  private _responderErrorMasking = new RtbfabricLinkLinkAttributesResponderErrorMaskingList(this, "responder_error_masking", false);
  public get responderErrorMasking() {
    return this._responderErrorMasking;
  }
  public putResponderErrorMasking(value: RtbfabricLinkLinkAttributesResponderErrorMasking[] | cdktn.IResolvable) {
    this._responderErrorMasking.internalValue = value;
  }
  public resetResponderErrorMasking() {
    this._responderErrorMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderErrorMaskingInput() {
    return this._responderErrorMasking.internalValue;
  }
}
export interface RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#error_log RtbfabricLink#error_log}
  */
  readonly errorLog: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#filter_log RtbfabricLink#filter_log}
  */
  readonly filterLog: number;
}

export function rtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToTerraform(struct?: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    error_log: cdktn.numberToTerraform(struct!.errorLog),
    filter_log: cdktn.numberToTerraform(struct!.filterLog),
  }
}


export function rtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToHclTerraform(struct?: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    error_log: {
      value: cdktn.numberToHclTerraform(struct!.errorLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_log: {
      value: cdktn.numberToHclTerraform(struct!.filterLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorLog = this._errorLog;
    }
    if (this._filterLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLog = this._filterLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorLog = undefined;
      this._filterLog = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorLog = value.errorLog;
      this._filterLog = value.filterLog;
    }
  }

  // error_log - computed: false, optional: false, required: true
  private _errorLog?: number;
  public get errorLog() {
    return this.getNumberAttribute('error_log');
  }
  public set errorLog(value: number) {
    this._errorLog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLogInput() {
    return this._errorLog;
  }

  // filter_log - computed: false, optional: false, required: true
  private _filterLog?: number;
  public get filterLog() {
    return this.getNumberAttribute('filter_log');
  }
  public set filterLog(value: number) {
    this._filterLog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterLogInput() {
    return this._filterLog;
  }
}
export interface RtbfabricLinkLinkLogSettingsApplicationLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#link_application_log_sampling RtbfabricLink#link_application_log_sampling}
  */
  readonly linkApplicationLogSampling: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
}

export function rtbfabricLinkLinkLogSettingsApplicationLogsToTerraform(struct?: RtbfabricLinkLinkLogSettingsApplicationLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    link_application_log_sampling: rtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToTerraform(struct!.linkApplicationLogSampling),
  }
}


export function rtbfabricLinkLinkLogSettingsApplicationLogsToHclTerraform(struct?: RtbfabricLinkLinkLogSettingsApplicationLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    link_application_log_sampling: {
      value: rtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingToHclTerraform(struct!.linkApplicationLogSampling),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkLinkLogSettingsApplicationLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkApplicationLogSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkApplicationLogSampling = this._linkApplicationLogSampling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkLinkLogSettingsApplicationLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkApplicationLogSampling.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkApplicationLogSampling.internalValue = value.linkApplicationLogSampling;
    }
  }

  // link_application_log_sampling - computed: false, optional: false, required: true
  private _linkApplicationLogSampling = new RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(this, "link_application_log_sampling");
  public get linkApplicationLogSampling() {
    return this._linkApplicationLogSampling;
  }
  public putLinkApplicationLogSampling(value: RtbfabricLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling) {
    this._linkApplicationLogSampling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkApplicationLogSamplingInput() {
    return this._linkApplicationLogSampling.internalValue;
  }
}
export interface RtbfabricLinkLinkLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#application_logs RtbfabricLink#application_logs}
  */
  readonly applicationLogs: RtbfabricLinkLinkLogSettingsApplicationLogs;
}

export function rtbfabricLinkLinkLogSettingsToTerraform(struct?: RtbfabricLinkLinkLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_logs: rtbfabricLinkLinkLogSettingsApplicationLogsToTerraform(struct!.applicationLogs),
  }
}


export function rtbfabricLinkLinkLogSettingsToHclTerraform(struct?: RtbfabricLinkLinkLogSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_logs: {
      value: rtbfabricLinkLinkLogSettingsApplicationLogsToHclTerraform(struct!.applicationLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkLinkLogSettingsApplicationLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkLinkLogSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkLinkLogSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationLogs = this._applicationLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkLinkLogSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationLogs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationLogs.internalValue = value.applicationLogs;
    }
  }

  // application_logs - computed: false, optional: false, required: true
  private _applicationLogs = new RtbfabricLinkLinkLogSettingsApplicationLogsOutputReference(this, "application_logs");
  public get applicationLogs() {
    return this._applicationLogs;
  }
  public putApplicationLogs(value: RtbfabricLinkLinkLogSettingsApplicationLogs) {
    this._applicationLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogsInput() {
    return this._applicationLogs.internalValue;
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParametersNoBid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#pass_through_percentage RtbfabricLink#pass_through_percentage}
  */
  readonly passThroughPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#reason RtbfabricLink#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#reason_code RtbfabricLink#reason_code}
  */
  readonly reasonCode?: number;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersNoBidToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersNoBid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pass_through_percentage: cdktn.numberToTerraform(struct!.passThroughPercentage),
    reason: cdktn.stringToTerraform(struct!.reason),
    reason_code: cdktn.numberToTerraform(struct!.reasonCode),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersNoBidToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersNoBid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pass_through_percentage: {
      value: cdktn.numberToHclTerraform(struct!.passThroughPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reason: {
      value: cdktn.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code: {
      value: cdktn.numberToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersNoBid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passThroughPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughPercentage = this._passThroughPercentage;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersNoBid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passThroughPercentage = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passThroughPercentage = value.passThroughPercentage;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
    }
  }

  // pass_through_percentage - computed: true, optional: true, required: false
  private _passThroughPercentage?: number;
  public get passThroughPercentage() {
    return this.getNumberAttribute('pass_through_percentage');
  }
  public set passThroughPercentage(value: number) {
    this._passThroughPercentage = value;
  }
  public resetPassThroughPercentage() {
    this._passThroughPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughPercentageInput() {
    return this._passThroughPercentage;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string;
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: number;
  public get reasonCode() {
    return this.getNumberAttribute('reason_code');
  }
  public set reasonCode(value: number) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}
  */
  readonly value?: string;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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
export interface RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#no_bid_reason_code RtbfabricLink#no_bid_reason_code}
  */
  readonly noBidReasonCode?: number;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    no_bid_reason_code: cdktn.numberToTerraform(struct!.noBidReasonCode),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    no_bid_reason_code: {
      value: cdktn.numberToHclTerraform(struct!.noBidReasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noBidReasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBidReasonCode = this._noBidReasonCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noBidReasonCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noBidReasonCode = value.noBidReasonCode;
    }
  }

  // no_bid_reason_code - computed: true, optional: true, required: false
  private _noBidReasonCode?: number;
  public get noBidReasonCode() {
    return this.getNumberAttribute('no_bid_reason_code');
  }
  public set noBidReasonCode(value: number) {
    this._noBidReasonCode = value;
  }
  public resetNoBidReasonCode() {
    this._noBidReasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBidReasonCodeInput() {
    return this._noBidReasonCode;
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#header_tag RtbfabricLink#header_tag}
  */
  readonly headerTag?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}
  */
  readonly noBid?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_tag: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagToTerraform(struct!.headerTag),
    no_bid: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidToTerraform(struct!.noBid),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_tag: {
      value: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagToHclTerraform(struct!.headerTag),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag",
    },
    no_bid: {
      value: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidToHclTerraform(struct!.noBid),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTag = this._headerTag?.internalValue;
    }
    if (this._noBid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBid = this._noBid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerTag.internalValue = undefined;
      this._noBid.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerTag.internalValue = value.headerTag;
      this._noBid.internalValue = value.noBid;
    }
  }

  // header_tag - computed: true, optional: true, required: false
  private _headerTag = new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTagOutputReference(this, "header_tag");
  public get headerTag() {
    return this._headerTag;
  }
  public putHeaderTag(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionHeaderTag) {
    this._headerTag.internalValue = value;
  }
  public resetHeaderTag() {
    this._headerTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTagInput() {
    return this._headerTag.internalValue;
  }

  // no_bid - computed: true, optional: true, required: false
  private _noBid = new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBidOutputReference(this, "no_bid");
  public get noBid() {
    return this._noBid;
  }
  public putNoBid(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionNoBid) {
    this._noBid.internalValue = value;
  }
  public resetNoBid() {
    this._noBid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBidInput() {
    return this._noBid.internalValue;
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#path RtbfabricLink#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#values RtbfabricLink#values}
  */
  readonly values?: string[];
}

export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._values = value.values;
    }
  }

  // path - computed: true, optional: true, required: false
  private _path?: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[];
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList extends cdktn.ComplexList {
  public internalValue? : RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] | cdktn.IResolvable

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
  public get(index: number): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference {
    return new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#criteria RtbfabricLink#criteria}
  */
  readonly criteria?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] | cdktn.IResolvable;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    criteria: cdktn.listMapper(rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaToTerraform, false)(struct!.criteria),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    criteria: {
      value: cdktn.listMapperHcl(rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaToHclTerraform, false)(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria.internalValue = value.criteria;
    }
  }

  // criteria - computed: true, optional: true, required: false
  private _criteria = new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationCriteria[] | cdktn.IResolvable) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList extends cdktn.ComplexList {
  public internalValue? : RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] | cdktn.IResolvable

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
  public get(index: number): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference {
    return new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#action RtbfabricLink#action}
  */
  readonly action?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#filter_configuration RtbfabricLink#filter_configuration}
  */
  readonly filterConfiguration?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#filter_type RtbfabricLink#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#holdback_percentage RtbfabricLink#holdback_percentage}
  */
  readonly holdbackPercentage?: number;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionToTerraform(struct!.action),
    filter_configuration: cdktn.listMapper(rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationToTerraform, false)(struct!.filterConfiguration),
    filter_type: cdktn.stringToTerraform(struct!.filterType),
    holdback_percentage: cdktn.numberToTerraform(struct!.holdbackPercentage),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction",
    },
    filter_configuration: {
      value: cdktn.listMapperHcl(rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationToHclTerraform, false)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList",
    },
    filter_type: {
      value: cdktn.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holdback_percentage: {
      value: cdktn.numberToHclTerraform(struct!.holdbackPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._holdbackPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdbackPercentage = this._holdbackPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._filterConfiguration.internalValue = undefined;
      this._filterType = undefined;
      this._holdbackPercentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._filterConfiguration.internalValue = value.filterConfiguration;
      this._filterType = value.filterType;
      this._holdbackPercentage = value.holdbackPercentage;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action = new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // filter_configuration - computed: true, optional: true, required: false
  private _filterConfiguration = new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfigurationList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeFilterConfiguration[] | cdktn.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string;
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // holdback_percentage - computed: true, optional: true, required: false
  private _holdbackPercentage?: number;
  public get holdbackPercentage() {
    return this.getNumberAttribute('holdback_percentage');
  }
  public set holdbackPercentage(value: number) {
    this._holdbackPercentage = value;
  }
  public resetHoldbackPercentage() {
    this._holdbackPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdbackPercentageInput() {
    return this._holdbackPercentage;
  }
}
export interface RtbfabricLinkModuleConfigurationListModuleParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#no_bid RtbfabricLink#no_bid}
  */
  readonly noBid?: RtbfabricLinkModuleConfigurationListModuleParametersNoBid;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#open_rtb_attribute RtbfabricLink#open_rtb_attribute}
  */
  readonly openRtbAttribute?: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute;
}

export function rtbfabricLinkModuleConfigurationListModuleParametersToTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    no_bid: rtbfabricLinkModuleConfigurationListModuleParametersNoBidToTerraform(struct!.noBid),
    open_rtb_attribute: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeToTerraform(struct!.openRtbAttribute),
  }
}


export function rtbfabricLinkModuleConfigurationListModuleParametersToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListModuleParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    no_bid: {
      value: rtbfabricLinkModuleConfigurationListModuleParametersNoBidToHclTerraform(struct!.noBid),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersNoBid",
    },
    open_rtb_attribute: {
      value: rtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeToHclTerraform(struct!.openRtbAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListModuleParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RtbfabricLinkModuleConfigurationListModuleParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noBid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noBid = this._noBid?.internalValue;
    }
    if (this._openRtbAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openRtbAttribute = this._openRtbAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListModuleParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noBid.internalValue = undefined;
      this._openRtbAttribute.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noBid.internalValue = value.noBid;
      this._openRtbAttribute.internalValue = value.openRtbAttribute;
    }
  }

  // no_bid - computed: true, optional: true, required: false
  private _noBid = new RtbfabricLinkModuleConfigurationListModuleParametersNoBidOutputReference(this, "no_bid");
  public get noBid() {
    return this._noBid;
  }
  public putNoBid(value: RtbfabricLinkModuleConfigurationListModuleParametersNoBid) {
    this._noBid.internalValue = value;
  }
  public resetNoBid() {
    this._noBid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBidInput() {
    return this._noBid.internalValue;
  }

  // open_rtb_attribute - computed: true, optional: true, required: false
  private _openRtbAttribute = new RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttributeOutputReference(this, "open_rtb_attribute");
  public get openRtbAttribute() {
    return this._openRtbAttribute;
  }
  public putOpenRtbAttribute(value: RtbfabricLinkModuleConfigurationListModuleParametersOpenRtbAttribute) {
    this._openRtbAttribute.internalValue = value;
  }
  public resetOpenRtbAttribute() {
    this._openRtbAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openRtbAttributeInput() {
    return this._openRtbAttribute.internalValue;
  }
}
export interface RtbfabricLinkModuleConfigurationListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#depends_on RtbfabricLink#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#module_parameters RtbfabricLink#module_parameters}
  */
  readonly moduleParameters?: RtbfabricLinkModuleConfigurationListModuleParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#name RtbfabricLink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#version RtbfabricLink#version}
  */
  readonly version?: string;
}

export function rtbfabricLinkModuleConfigurationListStructToTerraform(struct?: RtbfabricLinkModuleConfigurationListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    depends_on: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dependsOn),
    module_parameters: rtbfabricLinkModuleConfigurationListModuleParametersToTerraform(struct!.moduleParameters),
    name: cdktn.stringToTerraform(struct!.name),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function rtbfabricLinkModuleConfigurationListStructToHclTerraform(struct?: RtbfabricLinkModuleConfigurationListStruct | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    depends_on: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    module_parameters: {
      value: rtbfabricLinkModuleConfigurationListModuleParametersToHclTerraform(struct!.moduleParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "RtbfabricLinkModuleConfigurationListModuleParameters",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RtbfabricLinkModuleConfigurationListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RtbfabricLinkModuleConfigurationListStruct | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._moduleParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleParameters = this._moduleParameters?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RtbfabricLinkModuleConfigurationListStruct | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn = undefined;
      this._moduleParameters.internalValue = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn = value.dependsOn;
      this._moduleParameters.internalValue = value.moduleParameters;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // depends_on - computed: true, optional: true, required: false
  private _dependsOn?: string[];
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
  }

  // module_parameters - computed: true, optional: true, required: false
  private _moduleParameters = new RtbfabricLinkModuleConfigurationListModuleParametersOutputReference(this, "module_parameters");
  public get moduleParameters() {
    return this._moduleParameters;
  }
  public putModuleParameters(value: RtbfabricLinkModuleConfigurationListModuleParameters) {
    this._moduleParameters.internalValue = value;
  }
  public resetModuleParameters() {
    this._moduleParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleParametersInput() {
    return this._moduleParameters.internalValue;
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

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class RtbfabricLinkModuleConfigurationListStructList extends cdktn.ComplexList {
  public internalValue? : RtbfabricLinkModuleConfigurationListStruct[] | cdktn.IResolvable

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
  public get(index: number): RtbfabricLinkModuleConfigurationListStructOutputReference {
    return new RtbfabricLinkModuleConfigurationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RtbfabricLinkTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#key RtbfabricLink#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#value RtbfabricLink#value}
  */
  readonly value?: string;
}

export function rtbfabricLinkTagsToTerraform(struct?: RtbfabricLinkTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function rtbfabricLinkTagsToHclTerraform(struct?: RtbfabricLinkTags | cdktn.IResolvable): any {
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

export class RtbfabricLinkTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RtbfabricLinkTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RtbfabricLinkTags | cdktn.IResolvable | undefined) {
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

export class RtbfabricLinkTagsList extends cdktn.ComplexList {
  public internalValue? : RtbfabricLinkTags[] | cdktn.IResolvable

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
  public get(index: number): RtbfabricLinkTagsOutputReference {
    return new RtbfabricLinkTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link awscc_rtbfabric_link}
*/
export class RtbfabricLink extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_rtbfabric_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RtbfabricLink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RtbfabricLink to import
  * @param importFromId The id of the existing RtbfabricLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RtbfabricLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rtbfabric_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/rtbfabric_link awscc_rtbfabric_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RtbfabricLinkConfig
  */
  public constructor(scope: Construct, id: string, config: RtbfabricLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_rtbfabric_link',
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
    this._gatewayId = config.gatewayId;
    this._httpResponderAllowed = config.httpResponderAllowed;
    this._linkAttributes.internalValue = config.linkAttributes;
    this._linkLogSettings.internalValue = config.linkLogSettings;
    this._moduleConfigurationList.internalValue = config.moduleConfigurationList;
    this._peerGatewayId = config.peerGatewayId;
    this._tags.internalValue = config.tags;
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

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string;
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // http_responder_allowed - computed: true, optional: true, required: false
  private _httpResponderAllowed?: boolean | cdktn.IResolvable;
  public get httpResponderAllowed() {
    return this.getBooleanAttribute('http_responder_allowed');
  }
  public set httpResponderAllowed(value: boolean | cdktn.IResolvable) {
    this._httpResponderAllowed = value;
  }
  public resetHttpResponderAllowed() {
    this._httpResponderAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponderAllowedInput() {
    return this._httpResponderAllowed;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_attributes - computed: true, optional: true, required: false
  private _linkAttributes = new RtbfabricLinkLinkAttributesOutputReference(this, "link_attributes");
  public get linkAttributes() {
    return this._linkAttributes;
  }
  public putLinkAttributes(value: RtbfabricLinkLinkAttributes) {
    this._linkAttributes.internalValue = value;
  }
  public resetLinkAttributes() {
    this._linkAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAttributesInput() {
    return this._linkAttributes.internalValue;
  }

  // link_direction - computed: true, optional: false, required: false
  public get linkDirection() {
    return this.getStringAttribute('link_direction');
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // link_log_settings - computed: false, optional: false, required: true
  private _linkLogSettings = new RtbfabricLinkLinkLogSettingsOutputReference(this, "link_log_settings");
  public get linkLogSettings() {
    return this._linkLogSettings;
  }
  public putLinkLogSettings(value: RtbfabricLinkLinkLogSettings) {
    this._linkLogSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLogSettingsInput() {
    return this._linkLogSettings.internalValue;
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // module_configuration_list - computed: true, optional: true, required: false
  private _moduleConfigurationList = new RtbfabricLinkModuleConfigurationListStructList(this, "module_configuration_list", false);
  public get moduleConfigurationList() {
    return this._moduleConfigurationList;
  }
  public putModuleConfigurationList(value: RtbfabricLinkModuleConfigurationListStruct[] | cdktn.IResolvable) {
    this._moduleConfigurationList.internalValue = value;
  }
  public resetModuleConfigurationList() {
    this._moduleConfigurationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleConfigurationListInput() {
    return this._moduleConfigurationList.internalValue;
  }

  // peer_gateway_id - computed: false, optional: false, required: true
  private _peerGatewayId?: string;
  public get peerGatewayId() {
    return this.getStringAttribute('peer_gateway_id');
  }
  public set peerGatewayId(value: string) {
    this._peerGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGatewayIdInput() {
    return this._peerGatewayId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new RtbfabricLinkTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: RtbfabricLinkTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      gateway_id: cdktn.stringToTerraform(this._gatewayId),
      http_responder_allowed: cdktn.booleanToTerraform(this._httpResponderAllowed),
      link_attributes: rtbfabricLinkLinkAttributesToTerraform(this._linkAttributes.internalValue),
      link_log_settings: rtbfabricLinkLinkLogSettingsToTerraform(this._linkLogSettings.internalValue),
      module_configuration_list: cdktn.listMapper(rtbfabricLinkModuleConfigurationListStructToTerraform, false)(this._moduleConfigurationList.internalValue),
      peer_gateway_id: cdktn.stringToTerraform(this._peerGatewayId),
      tags: cdktn.listMapper(rtbfabricLinkTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktn.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_responder_allowed: {
        value: cdktn.booleanToHclTerraform(this._httpResponderAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link_attributes: {
        value: rtbfabricLinkLinkAttributesToHclTerraform(this._linkAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RtbfabricLinkLinkAttributes",
      },
      link_log_settings: {
        value: rtbfabricLinkLinkLogSettingsToHclTerraform(this._linkLogSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RtbfabricLinkLinkLogSettings",
      },
      module_configuration_list: {
        value: cdktn.listMapperHcl(rtbfabricLinkModuleConfigurationListStructToHclTerraform, false)(this._moduleConfigurationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RtbfabricLinkModuleConfigurationListStructList",
      },
      peer_gateway_id: {
        value: cdktn.stringToHclTerraform(this._peerGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(rtbfabricLinkTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RtbfabricLinkTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
