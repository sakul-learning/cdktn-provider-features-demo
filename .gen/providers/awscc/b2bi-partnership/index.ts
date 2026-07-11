// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface B2BiPartnershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#capabilities B2BiPartnership#capabilities}
  */
  readonly capabilities: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#capability_options B2BiPartnership#capability_options}
  */
  readonly capabilityOptions?: B2BiPartnershipCapabilityOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#email B2BiPartnership#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#name B2BiPartnership#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#phone B2BiPartnership#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#profile_id B2BiPartnership#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#tags B2BiPartnership#tags}
  */
  readonly tags?: B2BiPartnershipTags[] | cdktn.IResolvable;
}
export interface B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#functional_acknowledgment B2BiPartnership#functional_acknowledgment}
  */
  readonly functionalAcknowledgment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#technical_acknowledgment B2BiPartnership#technical_acknowledgment}
  */
  readonly technicalAcknowledgment?: string;
}

export function b2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsToTerraform(struct?: B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    functional_acknowledgment: cdktn.stringToTerraform(struct!.functionalAcknowledgment),
    technical_acknowledgment: cdktn.stringToTerraform(struct!.technicalAcknowledgment),
  }
}


export function b2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    functional_acknowledgment: {
      value: cdktn.stringToHclTerraform(struct!.functionalAcknowledgment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technical_acknowledgment: {
      value: cdktn.stringToHclTerraform(struct!.technicalAcknowledgment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionalAcknowledgment !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionalAcknowledgment = this._functionalAcknowledgment;
    }
    if (this._technicalAcknowledgment !== undefined) {
      hasAnyValues = true;
      internalValueResult.technicalAcknowledgment = this._technicalAcknowledgment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionalAcknowledgment = undefined;
      this._technicalAcknowledgment = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionalAcknowledgment = value.functionalAcknowledgment;
      this._technicalAcknowledgment = value.technicalAcknowledgment;
    }
  }

  // functional_acknowledgment - computed: true, optional: true, required: false
  private _functionalAcknowledgment?: string; 
  public get functionalAcknowledgment() {
    return this.getStringAttribute('functional_acknowledgment');
  }
  public set functionalAcknowledgment(value: string) {
    this._functionalAcknowledgment = value;
  }
  public resetFunctionalAcknowledgment() {
    this._functionalAcknowledgment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalAcknowledgmentInput() {
    return this._functionalAcknowledgment;
  }

  // technical_acknowledgment - computed: true, optional: true, required: false
  private _technicalAcknowledgment?: string; 
  public get technicalAcknowledgment() {
    return this.getStringAttribute('technical_acknowledgment');
  }
  public set technicalAcknowledgment(value: string) {
    this._technicalAcknowledgment = value;
  }
  public resetTechnicalAcknowledgment() {
    this._technicalAcknowledgment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalAcknowledgmentInput() {
    return this._technicalAcknowledgment;
  }
}
export interface B2BiPartnershipCapabilityOptionsInboundEdiX12 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#acknowledgment_options B2BiPartnership#acknowledgment_options}
  */
  readonly acknowledgmentOptions?: B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions;
}

export function b2BiPartnershipCapabilityOptionsInboundEdiX12ToTerraform(struct?: B2BiPartnershipCapabilityOptionsInboundEdiX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acknowledgment_options: b2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsToTerraform(struct!.acknowledgmentOptions),
  }
}


export function b2BiPartnershipCapabilityOptionsInboundEdiX12ToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsInboundEdiX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acknowledgment_options: {
      value: b2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsToHclTerraform(struct!.acknowledgmentOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsInboundEdiX12 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgmentOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgmentOptions = this._acknowledgmentOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsInboundEdiX12 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acknowledgmentOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acknowledgmentOptions.internalValue = value.acknowledgmentOptions;
    }
  }

  // acknowledgment_options - computed: true, optional: true, required: false
  private _acknowledgmentOptions = new B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference(this, "acknowledgment_options");
  public get acknowledgmentOptions() {
    return this._acknowledgmentOptions;
  }
  public putAcknowledgmentOptions(value: B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions) {
    this._acknowledgmentOptions.internalValue = value;
  }
  public resetAcknowledgmentOptions() {
    this._acknowledgmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgmentOptionsInput() {
    return this._acknowledgmentOptions.internalValue;
  }
}
export interface B2BiPartnershipCapabilityOptionsInboundEdi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#x12 B2BiPartnership#x12}
  */
  readonly x12?: B2BiPartnershipCapabilityOptionsInboundEdiX12;
}

export function b2BiPartnershipCapabilityOptionsInboundEdiToTerraform(struct?: B2BiPartnershipCapabilityOptionsInboundEdi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12: b2BiPartnershipCapabilityOptionsInboundEdiX12ToTerraform(struct!.x12),
  }
}


export function b2BiPartnershipCapabilityOptionsInboundEdiToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsInboundEdi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12: {
      value: b2BiPartnershipCapabilityOptionsInboundEdiX12ToHclTerraform(struct!.x12),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsInboundEdiX12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsInboundEdiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsInboundEdi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12 = this._x12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsInboundEdi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12.internalValue = value.x12;
    }
  }

  // x12 - computed: true, optional: true, required: false
  private _x12 = new B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
  public putX12(value: B2BiPartnershipCapabilityOptionsInboundEdiX12) {
    this._x12.internalValue = value;
  }
  public resetX12() {
    this._x12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12Input() {
    return this._x12.internalValue;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#starting_functional_group_control_number B2BiPartnership#starting_functional_group_control_number}
  */
  readonly startingFunctionalGroupControlNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#starting_interchange_control_number B2BiPartnership#starting_interchange_control_number}
  */
  readonly startingInterchangeControlNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#starting_transaction_set_control_number B2BiPartnership#starting_transaction_set_control_number}
  */
  readonly startingTransactionSetControlNumber?: number;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    starting_functional_group_control_number: cdktn.numberToTerraform(struct!.startingFunctionalGroupControlNumber),
    starting_interchange_control_number: cdktn.numberToTerraform(struct!.startingInterchangeControlNumber),
    starting_transaction_set_control_number: cdktn.numberToTerraform(struct!.startingTransactionSetControlNumber),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    starting_functional_group_control_number: {
      value: cdktn.numberToHclTerraform(struct!.startingFunctionalGroupControlNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_interchange_control_number: {
      value: cdktn.numberToHclTerraform(struct!.startingInterchangeControlNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_transaction_set_control_number: {
      value: cdktn.numberToHclTerraform(struct!.startingTransactionSetControlNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startingFunctionalGroupControlNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingFunctionalGroupControlNumber = this._startingFunctionalGroupControlNumber;
    }
    if (this._startingInterchangeControlNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingInterchangeControlNumber = this._startingInterchangeControlNumber;
    }
    if (this._startingTransactionSetControlNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingTransactionSetControlNumber = this._startingTransactionSetControlNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startingFunctionalGroupControlNumber = undefined;
      this._startingInterchangeControlNumber = undefined;
      this._startingTransactionSetControlNumber = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startingFunctionalGroupControlNumber = value.startingFunctionalGroupControlNumber;
      this._startingInterchangeControlNumber = value.startingInterchangeControlNumber;
      this._startingTransactionSetControlNumber = value.startingTransactionSetControlNumber;
    }
  }

  // starting_functional_group_control_number - computed: true, optional: true, required: false
  private _startingFunctionalGroupControlNumber?: number; 
  public get startingFunctionalGroupControlNumber() {
    return this.getNumberAttribute('starting_functional_group_control_number');
  }
  public set startingFunctionalGroupControlNumber(value: number) {
    this._startingFunctionalGroupControlNumber = value;
  }
  public resetStartingFunctionalGroupControlNumber() {
    this._startingFunctionalGroupControlNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingFunctionalGroupControlNumberInput() {
    return this._startingFunctionalGroupControlNumber;
  }

  // starting_interchange_control_number - computed: true, optional: true, required: false
  private _startingInterchangeControlNumber?: number; 
  public get startingInterchangeControlNumber() {
    return this.getNumberAttribute('starting_interchange_control_number');
  }
  public set startingInterchangeControlNumber(value: number) {
    this._startingInterchangeControlNumber = value;
  }
  public resetStartingInterchangeControlNumber() {
    this._startingInterchangeControlNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingInterchangeControlNumberInput() {
    return this._startingInterchangeControlNumber;
  }

  // starting_transaction_set_control_number - computed: true, optional: true, required: false
  private _startingTransactionSetControlNumber?: number; 
  public get startingTransactionSetControlNumber() {
    return this.getNumberAttribute('starting_transaction_set_control_number');
  }
  public set startingTransactionSetControlNumber(value: number) {
    this._startingTransactionSetControlNumber = value;
  }
  public resetStartingTransactionSetControlNumber() {
    this._startingTransactionSetControlNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingTransactionSetControlNumberInput() {
    return this._startingTransactionSetControlNumber;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#component_separator B2BiPartnership#component_separator}
  */
  readonly componentSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#data_element_separator B2BiPartnership#data_element_separator}
  */
  readonly dataElementSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#segment_terminator B2BiPartnership#segment_terminator}
  */
  readonly segmentTerminator?: string;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    component_separator: cdktn.stringToTerraform(struct!.componentSeparator),
    data_element_separator: cdktn.stringToTerraform(struct!.dataElementSeparator),
    segment_terminator: cdktn.stringToTerraform(struct!.segmentTerminator),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    component_separator: {
      value: cdktn.stringToHclTerraform(struct!.componentSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_element_separator: {
      value: cdktn.stringToHclTerraform(struct!.dataElementSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_terminator: {
      value: cdktn.stringToHclTerraform(struct!.segmentTerminator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentSeparator = this._componentSeparator;
    }
    if (this._dataElementSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataElementSeparator = this._dataElementSeparator;
    }
    if (this._segmentTerminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentTerminator = this._segmentTerminator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentSeparator = undefined;
      this._dataElementSeparator = undefined;
      this._segmentTerminator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentSeparator = value.componentSeparator;
      this._dataElementSeparator = value.dataElementSeparator;
      this._segmentTerminator = value.segmentTerminator;
    }
  }

  // component_separator - computed: true, optional: true, required: false
  private _componentSeparator?: string; 
  public get componentSeparator() {
    return this.getStringAttribute('component_separator');
  }
  public set componentSeparator(value: string) {
    this._componentSeparator = value;
  }
  public resetComponentSeparator() {
    this._componentSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentSeparatorInput() {
    return this._componentSeparator;
  }

  // data_element_separator - computed: true, optional: true, required: false
  private _dataElementSeparator?: string; 
  public get dataElementSeparator() {
    return this.getStringAttribute('data_element_separator');
  }
  public set dataElementSeparator(value: string) {
    this._dataElementSeparator = value;
  }
  public resetDataElementSeparator() {
    this._dataElementSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataElementSeparatorInput() {
    return this._dataElementSeparator;
  }

  // segment_terminator - computed: true, optional: true, required: false
  private _segmentTerminator?: string; 
  public get segmentTerminator() {
    return this.getStringAttribute('segment_terminator');
  }
  public set segmentTerminator(value: string) {
    this._segmentTerminator = value;
  }
  public resetSegmentTerminator() {
    this._segmentTerminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentTerminatorInput() {
    return this._segmentTerminator;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#application_receiver_code B2BiPartnership#application_receiver_code}
  */
  readonly applicationReceiverCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#application_sender_code B2BiPartnership#application_sender_code}
  */
  readonly applicationSenderCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#responsible_agency_code B2BiPartnership#responsible_agency_code}
  */
  readonly responsibleAgencyCode?: string;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    application_receiver_code: cdktn.stringToTerraform(struct!.applicationReceiverCode),
    application_sender_code: cdktn.stringToTerraform(struct!.applicationSenderCode),
    responsible_agency_code: cdktn.stringToTerraform(struct!.responsibleAgencyCode),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    application_receiver_code: {
      value: cdktn.stringToHclTerraform(struct!.applicationReceiverCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_sender_code: {
      value: cdktn.stringToHclTerraform(struct!.applicationSenderCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responsible_agency_code: {
      value: cdktn.stringToHclTerraform(struct!.responsibleAgencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationReceiverCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationReceiverCode = this._applicationReceiverCode;
    }
    if (this._applicationSenderCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSenderCode = this._applicationSenderCode;
    }
    if (this._responsibleAgencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsibleAgencyCode = this._responsibleAgencyCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationReceiverCode = undefined;
      this._applicationSenderCode = undefined;
      this._responsibleAgencyCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationReceiverCode = value.applicationReceiverCode;
      this._applicationSenderCode = value.applicationSenderCode;
      this._responsibleAgencyCode = value.responsibleAgencyCode;
    }
  }

  // application_receiver_code - computed: true, optional: true, required: false
  private _applicationReceiverCode?: string; 
  public get applicationReceiverCode() {
    return this.getStringAttribute('application_receiver_code');
  }
  public set applicationReceiverCode(value: string) {
    this._applicationReceiverCode = value;
  }
  public resetApplicationReceiverCode() {
    this._applicationReceiverCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationReceiverCodeInput() {
    return this._applicationReceiverCode;
  }

  // application_sender_code - computed: true, optional: true, required: false
  private _applicationSenderCode?: string; 
  public get applicationSenderCode() {
    return this.getStringAttribute('application_sender_code');
  }
  public set applicationSenderCode(value: string) {
    this._applicationSenderCode = value;
  }
  public resetApplicationSenderCode() {
    this._applicationSenderCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSenderCodeInput() {
    return this._applicationSenderCode;
  }

  // responsible_agency_code - computed: true, optional: true, required: false
  private _responsibleAgencyCode?: string; 
  public get responsibleAgencyCode() {
    return this.getStringAttribute('responsible_agency_code');
  }
  public set responsibleAgencyCode(value: string) {
    this._responsibleAgencyCode = value;
  }
  public resetResponsibleAgencyCode() {
    this._responsibleAgencyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleAgencyCodeInput() {
    return this._responsibleAgencyCode;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#acknowledgment_requested_code B2BiPartnership#acknowledgment_requested_code}
  */
  readonly acknowledgmentRequestedCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#receiver_id B2BiPartnership#receiver_id}
  */
  readonly receiverId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#receiver_id_qualifier B2BiPartnership#receiver_id_qualifier}
  */
  readonly receiverIdQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#repetition_separator B2BiPartnership#repetition_separator}
  */
  readonly repetitionSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#sender_id B2BiPartnership#sender_id}
  */
  readonly senderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#sender_id_qualifier B2BiPartnership#sender_id_qualifier}
  */
  readonly senderIdQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#usage_indicator_code B2BiPartnership#usage_indicator_code}
  */
  readonly usageIndicatorCode?: string;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    acknowledgment_requested_code: cdktn.stringToTerraform(struct!.acknowledgmentRequestedCode),
    receiver_id: cdktn.stringToTerraform(struct!.receiverId),
    receiver_id_qualifier: cdktn.stringToTerraform(struct!.receiverIdQualifier),
    repetition_separator: cdktn.stringToTerraform(struct!.repetitionSeparator),
    sender_id: cdktn.stringToTerraform(struct!.senderId),
    sender_id_qualifier: cdktn.stringToTerraform(struct!.senderIdQualifier),
    usage_indicator_code: cdktn.stringToTerraform(struct!.usageIndicatorCode),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    acknowledgment_requested_code: {
      value: cdktn.stringToHclTerraform(struct!.acknowledgmentRequestedCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_id: {
      value: cdktn.stringToHclTerraform(struct!.receiverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_id_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.receiverIdQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repetition_separator: {
      value: cdktn.stringToHclTerraform(struct!.repetitionSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender_id: {
      value: cdktn.stringToHclTerraform(struct!.senderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sender_id_qualifier: {
      value: cdktn.stringToHclTerraform(struct!.senderIdQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_indicator_code: {
      value: cdktn.stringToHclTerraform(struct!.usageIndicatorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgmentRequestedCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgmentRequestedCode = this._acknowledgmentRequestedCode;
    }
    if (this._receiverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverId = this._receiverId;
    }
    if (this._receiverIdQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverIdQualifier = this._receiverIdQualifier;
    }
    if (this._repetitionSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.repetitionSeparator = this._repetitionSeparator;
    }
    if (this._senderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderId = this._senderId;
    }
    if (this._senderIdQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.senderIdQualifier = this._senderIdQualifier;
    }
    if (this._usageIndicatorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageIndicatorCode = this._usageIndicatorCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acknowledgmentRequestedCode = undefined;
      this._receiverId = undefined;
      this._receiverIdQualifier = undefined;
      this._repetitionSeparator = undefined;
      this._senderId = undefined;
      this._senderIdQualifier = undefined;
      this._usageIndicatorCode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acknowledgmentRequestedCode = value.acknowledgmentRequestedCode;
      this._receiverId = value.receiverId;
      this._receiverIdQualifier = value.receiverIdQualifier;
      this._repetitionSeparator = value.repetitionSeparator;
      this._senderId = value.senderId;
      this._senderIdQualifier = value.senderIdQualifier;
      this._usageIndicatorCode = value.usageIndicatorCode;
    }
  }

  // acknowledgment_requested_code - computed: true, optional: true, required: false
  private _acknowledgmentRequestedCode?: string; 
  public get acknowledgmentRequestedCode() {
    return this.getStringAttribute('acknowledgment_requested_code');
  }
  public set acknowledgmentRequestedCode(value: string) {
    this._acknowledgmentRequestedCode = value;
  }
  public resetAcknowledgmentRequestedCode() {
    this._acknowledgmentRequestedCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgmentRequestedCodeInput() {
    return this._acknowledgmentRequestedCode;
  }

  // receiver_id - computed: true, optional: true, required: false
  private _receiverId?: string; 
  public get receiverId() {
    return this.getStringAttribute('receiver_id');
  }
  public set receiverId(value: string) {
    this._receiverId = value;
  }
  public resetReceiverId() {
    this._receiverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdInput() {
    return this._receiverId;
  }

  // receiver_id_qualifier - computed: true, optional: true, required: false
  private _receiverIdQualifier?: string; 
  public get receiverIdQualifier() {
    return this.getStringAttribute('receiver_id_qualifier');
  }
  public set receiverIdQualifier(value: string) {
    this._receiverIdQualifier = value;
  }
  public resetReceiverIdQualifier() {
    this._receiverIdQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdQualifierInput() {
    return this._receiverIdQualifier;
  }

  // repetition_separator - computed: true, optional: true, required: false
  private _repetitionSeparator?: string; 
  public get repetitionSeparator() {
    return this.getStringAttribute('repetition_separator');
  }
  public set repetitionSeparator(value: string) {
    this._repetitionSeparator = value;
  }
  public resetRepetitionSeparator() {
    this._repetitionSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repetitionSeparatorInput() {
    return this._repetitionSeparator;
  }

  // sender_id - computed: true, optional: true, required: false
  private _senderId?: string; 
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }
  public set senderId(value: string) {
    this._senderId = value;
  }
  public resetSenderId() {
    this._senderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdInput() {
    return this._senderId;
  }

  // sender_id_qualifier - computed: true, optional: true, required: false
  private _senderIdQualifier?: string; 
  public get senderIdQualifier() {
    return this.getStringAttribute('sender_id_qualifier');
  }
  public set senderIdQualifier(value: string) {
    this._senderIdQualifier = value;
  }
  public resetSenderIdQualifier() {
    this._senderIdQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderIdQualifierInput() {
    return this._senderIdQualifier;
  }

  // usage_indicator_code - computed: true, optional: true, required: false
  private _usageIndicatorCode?: string; 
  public get usageIndicatorCode() {
    return this.getStringAttribute('usage_indicator_code');
  }
  public set usageIndicatorCode(value: string) {
    this._usageIndicatorCode = value;
  }
  public resetUsageIndicatorCode() {
    this._usageIndicatorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageIndicatorCodeInput() {
    return this._usageIndicatorCode;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12Common {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#control_numbers B2BiPartnership#control_numbers}
  */
  readonly controlNumbers?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#delimiters B2BiPartnership#delimiters}
  */
  readonly delimiters?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#functional_group_headers B2BiPartnership#functional_group_headers}
  */
  readonly functionalGroupHeaders?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#gs_05_time_format B2BiPartnership#gs_05_time_format}
  */
  readonly gs05TimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#interchange_control_headers B2BiPartnership#interchange_control_headers}
  */
  readonly interchangeControlHeaders?: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#validate_edi B2BiPartnership#validate_edi}
  */
  readonly validateEdi?: boolean | cdktn.IResolvable;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12Common | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    control_numbers: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersToTerraform(struct!.controlNumbers),
    delimiters: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersToTerraform(struct!.delimiters),
    functional_group_headers: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersToTerraform(struct!.functionalGroupHeaders),
    gs_05_time_format: cdktn.stringToTerraform(struct!.gs05TimeFormat),
    interchange_control_headers: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersToTerraform(struct!.interchangeControlHeaders),
    validate_edi: cdktn.booleanToTerraform(struct!.validateEdi),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12Common | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    control_numbers: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersToHclTerraform(struct!.controlNumbers),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers",
    },
    delimiters: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersToHclTerraform(struct!.delimiters),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters",
    },
    functional_group_headers: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersToHclTerraform(struct!.functionalGroupHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders",
    },
    gs_05_time_format: {
      value: cdktn.stringToHclTerraform(struct!.gs05TimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interchange_control_headers: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersToHclTerraform(struct!.interchangeControlHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders",
    },
    validate_edi: {
      value: cdktn.booleanToHclTerraform(struct!.validateEdi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12Common | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlNumbers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlNumbers = this._controlNumbers?.internalValue;
    }
    if (this._delimiters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiters = this._delimiters?.internalValue;
    }
    if (this._functionalGroupHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionalGroupHeaders = this._functionalGroupHeaders?.internalValue;
    }
    if (this._gs05TimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.gs05TimeFormat = this._gs05TimeFormat;
    }
    if (this._interchangeControlHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interchangeControlHeaders = this._interchangeControlHeaders?.internalValue;
    }
    if (this._validateEdi !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateEdi = this._validateEdi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12Common | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlNumbers.internalValue = undefined;
      this._delimiters.internalValue = undefined;
      this._functionalGroupHeaders.internalValue = undefined;
      this._gs05TimeFormat = undefined;
      this._interchangeControlHeaders.internalValue = undefined;
      this._validateEdi = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlNumbers.internalValue = value.controlNumbers;
      this._delimiters.internalValue = value.delimiters;
      this._functionalGroupHeaders.internalValue = value.functionalGroupHeaders;
      this._gs05TimeFormat = value.gs05TimeFormat;
      this._interchangeControlHeaders.internalValue = value.interchangeControlHeaders;
      this._validateEdi = value.validateEdi;
    }
  }

  // control_numbers - computed: true, optional: true, required: false
  private _controlNumbers = new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference(this, "control_numbers");
  public get controlNumbers() {
    return this._controlNumbers;
  }
  public putControlNumbers(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers) {
    this._controlNumbers.internalValue = value;
  }
  public resetControlNumbers() {
    this._controlNumbers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlNumbersInput() {
    return this._controlNumbers.internalValue;
  }

  // delimiters - computed: true, optional: true, required: false
  private _delimiters = new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference(this, "delimiters");
  public get delimiters() {
    return this._delimiters;
  }
  public putDelimiters(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters) {
    this._delimiters.internalValue = value;
  }
  public resetDelimiters() {
    this._delimiters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimitersInput() {
    return this._delimiters.internalValue;
  }

  // functional_group_headers - computed: true, optional: true, required: false
  private _functionalGroupHeaders = new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference(this, "functional_group_headers");
  public get functionalGroupHeaders() {
    return this._functionalGroupHeaders;
  }
  public putFunctionalGroupHeaders(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders) {
    this._functionalGroupHeaders.internalValue = value;
  }
  public resetFunctionalGroupHeaders() {
    this._functionalGroupHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalGroupHeadersInput() {
    return this._functionalGroupHeaders.internalValue;
  }

  // gs_05_time_format - computed: true, optional: true, required: false
  private _gs05TimeFormat?: string; 
  public get gs05TimeFormat() {
    return this.getStringAttribute('gs_05_time_format');
  }
  public set gs05TimeFormat(value: string) {
    this._gs05TimeFormat = value;
  }
  public resetGs05TimeFormat() {
    this._gs05TimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gs05TimeFormatInput() {
    return this._gs05TimeFormat;
  }

  // interchange_control_headers - computed: true, optional: true, required: false
  private _interchangeControlHeaders = new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference(this, "interchange_control_headers");
  public get interchangeControlHeaders() {
    return this._interchangeControlHeaders;
  }
  public putInterchangeControlHeaders(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders) {
    this._interchangeControlHeaders.internalValue = value;
  }
  public resetInterchangeControlHeaders() {
    this._interchangeControlHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interchangeControlHeadersInput() {
    return this._interchangeControlHeaders.internalValue;
  }

  // validate_edi - computed: true, optional: true, required: false
  private _validateEdi?: boolean | cdktn.IResolvable; 
  public get validateEdi() {
    return this.getBooleanAttribute('validate_edi');
  }
  public set validateEdi(value: boolean | cdktn.IResolvable) {
    this._validateEdi = value;
  }
  public resetValidateEdi() {
    this._validateEdi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateEdiInput() {
    return this._validateEdi;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#line_length B2BiPartnership#line_length}
  */
  readonly lineLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#line_terminator B2BiPartnership#line_terminator}
  */
  readonly lineTerminator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#wrap_by B2BiPartnership#wrap_by}
  */
  readonly wrapBy?: string;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    line_length: cdktn.numberToTerraform(struct!.lineLength),
    line_terminator: cdktn.stringToTerraform(struct!.lineTerminator),
    wrap_by: cdktn.stringToTerraform(struct!.wrapBy),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    line_length: {
      value: cdktn.numberToHclTerraform(struct!.lineLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_terminator: {
      value: cdktn.stringToHclTerraform(struct!.lineTerminator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrap_by: {
      value: cdktn.stringToHclTerraform(struct!.wrapBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lineLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineLength = this._lineLength;
    }
    if (this._lineTerminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTerminator = this._lineTerminator;
    }
    if (this._wrapBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapBy = this._wrapBy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lineLength = undefined;
      this._lineTerminator = undefined;
      this._wrapBy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lineLength = value.lineLength;
      this._lineTerminator = value.lineTerminator;
      this._wrapBy = value.wrapBy;
    }
  }

  // line_length - computed: true, optional: true, required: false
  private _lineLength?: number; 
  public get lineLength() {
    return this.getNumberAttribute('line_length');
  }
  public set lineLength(value: number) {
    this._lineLength = value;
  }
  public resetLineLength() {
    this._lineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineLengthInput() {
    return this._lineLength;
  }

  // line_terminator - computed: true, optional: true, required: false
  private _lineTerminator?: string; 
  public get lineTerminator() {
    return this.getStringAttribute('line_terminator');
  }
  public set lineTerminator(value: string) {
    this._lineTerminator = value;
  }
  public resetLineTerminator() {
    this._lineTerminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTerminatorInput() {
    return this._lineTerminator;
  }

  // wrap_by - computed: true, optional: true, required: false
  private _wrapBy?: string; 
  public get wrapBy() {
    return this.getStringAttribute('wrap_by');
  }
  public set wrapBy(value: string) {
    this._wrapBy = value;
  }
  public resetWrapBy() {
    this._wrapBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapByInput() {
    return this._wrapBy;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdiX12 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#common B2BiPartnership#common}
  */
  readonly common?: B2BiPartnershipCapabilityOptionsOutboundEdiX12Common;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#wrap_options B2BiPartnership#wrap_options}
  */
  readonly wrapOptions?: B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiX12ToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    common: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonToTerraform(struct!.common),
    wrap_options: b2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsToTerraform(struct!.wrapOptions),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiX12ToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdiX12 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    common: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12CommonToHclTerraform(struct!.common),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12Common",
    },
    wrap_options: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsToHclTerraform(struct!.wrapOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdiX12 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._common?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common?.internalValue;
    }
    if (this._wrapOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrapOptions = this._wrapOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._common.internalValue = undefined;
      this._wrapOptions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._common.internalValue = value.common;
      this._wrapOptions.internalValue = value.wrapOptions;
    }
  }

  // common - computed: true, optional: true, required: false
  private _common = new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference(this, "common");
  public get common() {
    return this._common;
  }
  public putCommon(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12Common) {
    this._common.internalValue = value;
  }
  public resetCommon() {
    this._common.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common.internalValue;
  }

  // wrap_options - computed: true, optional: true, required: false
  private _wrapOptions = new B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference(this, "wrap_options");
  public get wrapOptions() {
    return this._wrapOptions;
  }
  public putWrapOptions(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions) {
    this._wrapOptions.internalValue = value;
  }
  public resetWrapOptions() {
    this._wrapOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapOptionsInput() {
    return this._wrapOptions.internalValue;
  }
}
export interface B2BiPartnershipCapabilityOptionsOutboundEdi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#x12 B2BiPartnership#x12}
  */
  readonly x12?: B2BiPartnershipCapabilityOptionsOutboundEdiX12;
}

export function b2BiPartnershipCapabilityOptionsOutboundEdiToTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    x12: b2BiPartnershipCapabilityOptionsOutboundEdiX12ToTerraform(struct!.x12),
  }
}


export function b2BiPartnershipCapabilityOptionsOutboundEdiToHclTerraform(struct?: B2BiPartnershipCapabilityOptionsOutboundEdi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    x12: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiX12ToHclTerraform(struct!.x12),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdiX12",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptionsOutboundEdi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x12?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x12 = this._x12?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptionsOutboundEdi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x12.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x12.internalValue = value.x12;
    }
  }

  // x12 - computed: true, optional: true, required: false
  private _x12 = new B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference(this, "x12");
  public get x12() {
    return this._x12;
  }
  public putX12(value: B2BiPartnershipCapabilityOptionsOutboundEdiX12) {
    this._x12.internalValue = value;
  }
  public resetX12() {
    this._x12.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x12Input() {
    return this._x12.internalValue;
  }
}
export interface B2BiPartnershipCapabilityOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#inbound_edi B2BiPartnership#inbound_edi}
  */
  readonly inboundEdi?: B2BiPartnershipCapabilityOptionsInboundEdi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#outbound_edi B2BiPartnership#outbound_edi}
  */
  readonly outboundEdi?: B2BiPartnershipCapabilityOptionsOutboundEdi;
}

export function b2BiPartnershipCapabilityOptionsToTerraform(struct?: B2BiPartnershipCapabilityOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    inbound_edi: b2BiPartnershipCapabilityOptionsInboundEdiToTerraform(struct!.inboundEdi),
    outbound_edi: b2BiPartnershipCapabilityOptionsOutboundEdiToTerraform(struct!.outboundEdi),
  }
}


export function b2BiPartnershipCapabilityOptionsToHclTerraform(struct?: B2BiPartnershipCapabilityOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    inbound_edi: {
      value: b2BiPartnershipCapabilityOptionsInboundEdiToHclTerraform(struct!.inboundEdi),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsInboundEdi",
    },
    outbound_edi: {
      value: b2BiPartnershipCapabilityOptionsOutboundEdiToHclTerraform(struct!.outboundEdi),
      isBlock: true,
      type: "struct",
      storageClassType: "B2BiPartnershipCapabilityOptionsOutboundEdi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class B2BiPartnershipCapabilityOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): B2BiPartnershipCapabilityOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundEdi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundEdi = this._inboundEdi?.internalValue;
    }
    if (this._outboundEdi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundEdi = this._outboundEdi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: B2BiPartnershipCapabilityOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundEdi.internalValue = undefined;
      this._outboundEdi.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundEdi.internalValue = value.inboundEdi;
      this._outboundEdi.internalValue = value.outboundEdi;
    }
  }

  // inbound_edi - computed: true, optional: true, required: false
  private _inboundEdi = new B2BiPartnershipCapabilityOptionsInboundEdiOutputReference(this, "inbound_edi");
  public get inboundEdi() {
    return this._inboundEdi;
  }
  public putInboundEdi(value: B2BiPartnershipCapabilityOptionsInboundEdi) {
    this._inboundEdi.internalValue = value;
  }
  public resetInboundEdi() {
    this._inboundEdi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundEdiInput() {
    return this._inboundEdi.internalValue;
  }

  // outbound_edi - computed: true, optional: true, required: false
  private _outboundEdi = new B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference(this, "outbound_edi");
  public get outboundEdi() {
    return this._outboundEdi;
  }
  public putOutboundEdi(value: B2BiPartnershipCapabilityOptionsOutboundEdi) {
    this._outboundEdi.internalValue = value;
  }
  public resetOutboundEdi() {
    this._outboundEdi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundEdiInput() {
    return this._outboundEdi.internalValue;
  }
}
export interface B2BiPartnershipTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#key B2BiPartnership#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#value B2BiPartnership#value}
  */
  readonly value?: string;
}

export function b2BiPartnershipTagsToTerraform(struct?: B2BiPartnershipTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function b2BiPartnershipTagsToHclTerraform(struct?: B2BiPartnershipTags | cdktn.IResolvable): any {
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

export class B2BiPartnershipTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): B2BiPartnershipTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: B2BiPartnershipTags | cdktn.IResolvable | undefined) {
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

export class B2BiPartnershipTagsList extends cdktn.ComplexList {
  public internalValue? : B2BiPartnershipTags[] | cdktn.IResolvable

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
  public get(index: number): B2BiPartnershipTagsOutputReference {
    return new B2BiPartnershipTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership awscc_b2bi_partnership}
*/
export class B2BiPartnership extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_b2bi_partnership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a B2BiPartnership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the B2BiPartnership to import
  * @param importFromId The id of the existing B2BiPartnership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the B2BiPartnership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_b2bi_partnership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/b2bi_partnership awscc_b2bi_partnership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options B2BiPartnershipConfig
  */
  public constructor(scope: Construct, id: string, config: B2BiPartnershipConfig) {
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
    this._capabilities = config.capabilities;
    this._capabilityOptions.internalValue = config.capabilityOptions;
    this._email = config.email;
    this._name = config.name;
    this._phone = config.phone;
    this._profileId = config.profileId;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }

  // capability_options - computed: true, optional: true, required: false
  private _capabilityOptions = new B2BiPartnershipCapabilityOptionsOutputReference(this, "capability_options");
  public get capabilityOptions() {
    return this._capabilityOptions;
  }
  public putCapabilityOptions(value: B2BiPartnershipCapabilityOptions) {
    this._capabilityOptions.internalValue = value;
  }
  public resetCapabilityOptions() {
    this._capabilityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOptionsInput() {
    return this._capabilityOptions.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // partnership_arn - computed: true, optional: false, required: false
  public get partnershipArn() {
    return this.getStringAttribute('partnership_arn');
  }

  // partnership_id - computed: true, optional: false, required: false
  public get partnershipId() {
    return this.getStringAttribute('partnership_id');
  }

  // phone - computed: true, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new B2BiPartnershipTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: B2BiPartnershipTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
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
      capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capabilities),
      capability_options: b2BiPartnershipCapabilityOptionsToTerraform(this._capabilityOptions.internalValue),
      email: cdktn.stringToTerraform(this._email),
      name: cdktn.stringToTerraform(this._name),
      phone: cdktn.stringToTerraform(this._phone),
      profile_id: cdktn.stringToTerraform(this._profileId),
      tags: cdktn.listMapper(b2BiPartnershipTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capabilities: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      capability_options: {
        value: b2BiPartnershipCapabilityOptionsToHclTerraform(this._capabilityOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "B2BiPartnershipCapabilityOptions",
      },
      email: {
        value: cdktn.stringToHclTerraform(this._email),
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
      phone: {
        value: cdktn.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktn.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(b2BiPartnershipTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "B2BiPartnershipTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
