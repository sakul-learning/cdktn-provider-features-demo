// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_partnership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccB2BiPartnershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_partnership#id DataAwsccB2BiPartnership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // functional_acknowledgment - computed: true, optional: false, required: false
  public get functionalAcknowledgment() {
    return this.getStringAttribute('functional_acknowledgment');
  }

  // technical_acknowledgment - computed: true, optional: false, required: false
  public get technicalAcknowledgment() {
    return this.getStringAttribute('technical_acknowledgment');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12ToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12ToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledgment_options - computed: true, optional: false, required: false
  private _acknowledgmentOptions = new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference(this, "acknowledgment_options");
  public get acknowledgmentOptions() {
    return this._acknowledgmentOptions;
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsInboundEdiToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsInboundEdi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12 - computed: true, optional: false, required: false
  private _x12 = new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // starting_functional_group_control_number - computed: true, optional: false, required: false
  public get startingFunctionalGroupControlNumber() {
    return this.getNumberAttribute('starting_functional_group_control_number');
  }

  // starting_interchange_control_number - computed: true, optional: false, required: false
  public get startingInterchangeControlNumber() {
    return this.getNumberAttribute('starting_interchange_control_number');
  }

  // starting_transaction_set_control_number - computed: true, optional: false, required: false
  public get startingTransactionSetControlNumber() {
    return this.getNumberAttribute('starting_transaction_set_control_number');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_separator - computed: true, optional: false, required: false
  public get componentSeparator() {
    return this.getStringAttribute('component_separator');
  }

  // data_element_separator - computed: true, optional: false, required: false
  public get dataElementSeparator() {
    return this.getStringAttribute('data_element_separator');
  }

  // segment_terminator - computed: true, optional: false, required: false
  public get segmentTerminator() {
    return this.getStringAttribute('segment_terminator');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_receiver_code - computed: true, optional: false, required: false
  public get applicationReceiverCode() {
    return this.getStringAttribute('application_receiver_code');
  }

  // application_sender_code - computed: true, optional: false, required: false
  public get applicationSenderCode() {
    return this.getStringAttribute('application_sender_code');
  }

  // responsible_agency_code - computed: true, optional: false, required: false
  public get responsibleAgencyCode() {
    return this.getStringAttribute('responsible_agency_code');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledgment_requested_code - computed: true, optional: false, required: false
  public get acknowledgmentRequestedCode() {
    return this.getStringAttribute('acknowledgment_requested_code');
  }

  // receiver_id - computed: true, optional: false, required: false
  public get receiverId() {
    return this.getStringAttribute('receiver_id');
  }

  // receiver_id_qualifier - computed: true, optional: false, required: false
  public get receiverIdQualifier() {
    return this.getStringAttribute('receiver_id_qualifier');
  }

  // repetition_separator - computed: true, optional: false, required: false
  public get repetitionSeparator() {
    return this.getStringAttribute('repetition_separator');
  }

  // sender_id - computed: true, optional: false, required: false
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }

  // sender_id_qualifier - computed: true, optional: false, required: false
  public get senderIdQualifier() {
    return this.getStringAttribute('sender_id_qualifier');
  }

  // usage_indicator_code - computed: true, optional: false, required: false
  public get usageIndicatorCode() {
    return this.getStringAttribute('usage_indicator_code');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12Common | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // control_numbers - computed: true, optional: false, required: false
  private _controlNumbers = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference(this, "control_numbers");
  public get controlNumbers() {
    return this._controlNumbers;
  }

  // delimiters - computed: true, optional: false, required: false
  private _delimiters = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference(this, "delimiters");
  public get delimiters() {
    return this._delimiters;
  }

  // functional_group_headers - computed: true, optional: false, required: false
  private _functionalGroupHeaders = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference(this, "functional_group_headers");
  public get functionalGroupHeaders() {
    return this._functionalGroupHeaders;
  }

  // gs_05_time_format - computed: true, optional: false, required: false
  public get gs05TimeFormat() {
    return this.getStringAttribute('gs_05_time_format');
  }

  // interchange_control_headers - computed: true, optional: false, required: false
  private _interchangeControlHeaders = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference(this, "interchange_control_headers");
  public get interchangeControlHeaders() {
    return this._interchangeControlHeaders;
  }

  // validate_edi - computed: true, optional: false, required: false
  public get validateEdi() {
    return this.getBooleanAttribute('validate_edi');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // line_length - computed: true, optional: false, required: false
  public get lineLength() {
    return this.getNumberAttribute('line_length');
  }

  // line_terminator - computed: true, optional: false, required: false
  public get lineTerminator() {
    return this.getStringAttribute('line_terminator');
  }

  // wrap_by - computed: true, optional: false, required: false
  public get wrapBy() {
    return this.getStringAttribute('wrap_by');
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12ToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12ToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common - computed: true, optional: false, required: false
  private _common = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference(this, "common");
  public get common() {
    return this._common;
  }

  // wrap_options - computed: true, optional: false, required: false
  private _wrapOptions = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference(this, "wrap_options");
  public get wrapOptions() {
    return this._wrapOptions;
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x12 - computed: true, optional: false, required: false
  private _x12 = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
}
export interface DataAwsccB2BiPartnershipCapabilityOptions {
}

export function dataAwsccB2BiPartnershipCapabilityOptionsToTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipCapabilityOptionsToHclTerraform(struct?: DataAwsccB2BiPartnershipCapabilityOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipCapabilityOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccB2BiPartnershipCapabilityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipCapabilityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound_edi - computed: true, optional: false, required: false
  private _inboundEdi = new DataAwsccB2BiPartnershipCapabilityOptionsInboundEdiOutputReference(this, "inbound_edi");
  public get inboundEdi() {
    return this._inboundEdi;
  }

  // outbound_edi - computed: true, optional: false, required: false
  private _outboundEdi = new DataAwsccB2BiPartnershipCapabilityOptionsOutboundEdiOutputReference(this, "outbound_edi");
  public get outboundEdi() {
    return this._outboundEdi;
  }
}
export interface DataAwsccB2BiPartnershipTags {
}

export function dataAwsccB2BiPartnershipTagsToTerraform(struct?: DataAwsccB2BiPartnershipTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccB2BiPartnershipTagsToHclTerraform(struct?: DataAwsccB2BiPartnershipTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccB2BiPartnershipTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccB2BiPartnershipTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccB2BiPartnershipTags | undefined) {
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

export class DataAwsccB2BiPartnershipTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccB2BiPartnershipTagsOutputReference {
    return new DataAwsccB2BiPartnershipTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_partnership awscc_b2bi_partnership}
*/
export class DataAwsccB2BiPartnership extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_b2bi_partnership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccB2BiPartnership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccB2BiPartnership to import
  * @param importFromId The id of the existing DataAwsccB2BiPartnership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_partnership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccB2BiPartnership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_b2bi_partnership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/b2bi_partnership awscc_b2bi_partnership} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccB2BiPartnershipConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccB2BiPartnershipConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_b2bi_partnership',
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

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // capability_options - computed: true, optional: false, required: false
  private _capabilityOptions = new DataAwsccB2BiPartnershipCapabilityOptionsOutputReference(this, "capability_options");
  public get capabilityOptions() {
    return this._capabilityOptions;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
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

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // partnership_arn - computed: true, optional: false, required: false
  public get partnershipArn() {
    return this.getStringAttribute('partnership_arn');
  }

  // partnership_id - computed: true, optional: false, required: false
  public get partnershipId() {
    return this.getStringAttribute('partnership_id');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccB2BiPartnershipTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // trading_partner_id - computed: true, optional: false, required: false
  public get tradingPartnerId() {
    return this.getStringAttribute('trading_partner_id');
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
