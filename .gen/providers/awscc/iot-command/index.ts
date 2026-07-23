// https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotCommandConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique identifier for the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#command_id IotCommand#command_id}
  */
  readonly commandId: string;
  /**
  * The date and time when the command was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#created_at IotCommand#created_at}
  */
  readonly createdAt?: string;
  /**
  * A flag indicating whether the command is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#deprecated IotCommand#deprecated}
  */
  readonly deprecated?: boolean | cdktn.IResolvable;
  /**
  * The description of the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#description IotCommand#description}
  */
  readonly description?: string;
  /**
  * The display name for the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#display_name IotCommand#display_name}
  */
  readonly displayName?: string;
  /**
  * The date and time when the command was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#last_updated_at IotCommand#last_updated_at}
  */
  readonly lastUpdatedAt?: string;
  /**
  * The list of mandatory parameters for the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#mandatory_parameters IotCommand#mandatory_parameters}
  */
  readonly mandatoryParameters?: IotCommandMandatoryParameters[] | cdktn.IResolvable;
  /**
  * The namespace to which the command belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#namespace IotCommand#namespace}
  */
  readonly namespace?: string;
  /**
  * The payload associated with the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#payload IotCommand#payload}
  */
  readonly payload?: IotCommandPayload;
  /**
  * The payload template associated with the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#payload_template IotCommand#payload_template}
  */
  readonly payloadTemplate?: string;
  /**
  * A flag indicating whether the command is pending deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#pending_deletion IotCommand#pending_deletion}
  */
  readonly pendingDeletion?: boolean | cdktn.IResolvable;
  /**
  * The command preprocessor configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#preprocessor IotCommand#preprocessor}
  */
  readonly preprocessor?: IotCommandPreprocessor;
  /**
  * The customer role associated with the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#role_arn IotCommand#role_arn}
  */
  readonly roleArn?: string;
  /**
  * The tags to be associated with the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#tags IotCommand#tags}
  */
  readonly tags?: IotCommandTags[] | cdktn.IResolvable;
}
export interface IotCommandMandatoryParametersDefaultValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#b IotCommand#b}
  */
  readonly b?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#bin IotCommand#bin}
  */
  readonly bin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#d IotCommand#d}
  */
  readonly d?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#i IotCommand#i}
  */
  readonly i?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#l IotCommand#l}
  */
  readonly l?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#s IotCommand#s}
  */
  readonly s?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#ul IotCommand#ul}
  */
  readonly ul?: string;
}

export function iotCommandMandatoryParametersDefaultValueToTerraform(struct?: IotCommandMandatoryParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    b: cdktn.booleanToTerraform(struct!.b),
    bin: cdktn.stringToTerraform(struct!.bin),
    d: cdktn.numberToTerraform(struct!.d),
    i: cdktn.numberToTerraform(struct!.i),
    l: cdktn.stringToTerraform(struct!.l),
    s: cdktn.stringToTerraform(struct!.s),
    ul: cdktn.stringToTerraform(struct!.ul),
  }
}


export function iotCommandMandatoryParametersDefaultValueToHclTerraform(struct?: IotCommandMandatoryParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    b: {
      value: cdktn.booleanToHclTerraform(struct!.b),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bin: {
      value: cdktn.stringToHclTerraform(struct!.bin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d: {
      value: cdktn.numberToHclTerraform(struct!.d),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    i: {
      value: cdktn.numberToHclTerraform(struct!.i),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l: {
      value: cdktn.stringToHclTerraform(struct!.l),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s: {
      value: cdktn.stringToHclTerraform(struct!.s),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ul: {
      value: cdktn.stringToHclTerraform(struct!.ul),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandMandatoryParametersDefaultValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandMandatoryParametersDefaultValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._b !== undefined) {
      hasAnyValues = true;
      internalValueResult.b = this._b;
    }
    if (this._bin !== undefined) {
      hasAnyValues = true;
      internalValueResult.bin = this._bin;
    }
    if (this._d !== undefined) {
      hasAnyValues = true;
      internalValueResult.d = this._d;
    }
    if (this._i !== undefined) {
      hasAnyValues = true;
      internalValueResult.i = this._i;
    }
    if (this._l !== undefined) {
      hasAnyValues = true;
      internalValueResult.l = this._l;
    }
    if (this._s !== undefined) {
      hasAnyValues = true;
      internalValueResult.s = this._s;
    }
    if (this._ul !== undefined) {
      hasAnyValues = true;
      internalValueResult.ul = this._ul;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandMandatoryParametersDefaultValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._b = undefined;
      this._bin = undefined;
      this._d = undefined;
      this._i = undefined;
      this._l = undefined;
      this._s = undefined;
      this._ul = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._b = value.b;
      this._bin = value.bin;
      this._d = value.d;
      this._i = value.i;
      this._l = value.l;
      this._s = value.s;
      this._ul = value.ul;
    }
  }

  // b - computed: true, optional: true, required: false
  private _b?: boolean | cdktn.IResolvable; 
  public get b() {
    return this.getBooleanAttribute('b');
  }
  public set b(value: boolean | cdktn.IResolvable) {
    this._b = value;
  }
  public resetB() {
    this._b = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bInput() {
    return this._b;
  }

  // bin - computed: true, optional: true, required: false
  private _bin?: string; 
  public get bin() {
    return this.getStringAttribute('bin');
  }
  public set bin(value: string) {
    this._bin = value;
  }
  public resetBin() {
    this._bin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binInput() {
    return this._bin;
  }

  // d - computed: true, optional: true, required: false
  private _d?: number; 
  public get d() {
    return this.getNumberAttribute('d');
  }
  public set d(value: number) {
    this._d = value;
  }
  public resetD() {
    this._d = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dInput() {
    return this._d;
  }

  // i - computed: true, optional: true, required: false
  private _i?: number; 
  public get i() {
    return this.getNumberAttribute('i');
  }
  public set i(value: number) {
    this._i = value;
  }
  public resetI() {
    this._i = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iInput() {
    return this._i;
  }

  // l - computed: true, optional: true, required: false
  private _l?: string; 
  public get l() {
    return this.getStringAttribute('l');
  }
  public set l(value: string) {
    this._l = value;
  }
  public resetL() {
    this._l = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lInput() {
    return this._l;
  }

  // s - computed: true, optional: true, required: false
  private _s?: string; 
  public get s() {
    return this.getStringAttribute('s');
  }
  public set s(value: string) {
    this._s = value;
  }
  public resetS() {
    this._s = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sInput() {
    return this._s;
  }

  // ul - computed: true, optional: true, required: false
  private _ul?: string; 
  public get ul() {
    return this.getStringAttribute('ul');
  }
  public set ul(value: string) {
    this._ul = value;
  }
  public resetUl() {
    this._ul = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulInput() {
    return this._ul;
  }
}
export interface IotCommandMandatoryParametersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#b IotCommand#b}
  */
  readonly b?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#bin IotCommand#bin}
  */
  readonly bin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#d IotCommand#d}
  */
  readonly d?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#i IotCommand#i}
  */
  readonly i?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#l IotCommand#l}
  */
  readonly l?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#s IotCommand#s}
  */
  readonly s?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#ul IotCommand#ul}
  */
  readonly ul?: string;
}

export function iotCommandMandatoryParametersValueToTerraform(struct?: IotCommandMandatoryParametersValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    b: cdktn.booleanToTerraform(struct!.b),
    bin: cdktn.stringToTerraform(struct!.bin),
    d: cdktn.numberToTerraform(struct!.d),
    i: cdktn.numberToTerraform(struct!.i),
    l: cdktn.stringToTerraform(struct!.l),
    s: cdktn.stringToTerraform(struct!.s),
    ul: cdktn.stringToTerraform(struct!.ul),
  }
}


export function iotCommandMandatoryParametersValueToHclTerraform(struct?: IotCommandMandatoryParametersValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    b: {
      value: cdktn.booleanToHclTerraform(struct!.b),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bin: {
      value: cdktn.stringToHclTerraform(struct!.bin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d: {
      value: cdktn.numberToHclTerraform(struct!.d),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    i: {
      value: cdktn.numberToHclTerraform(struct!.i),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l: {
      value: cdktn.stringToHclTerraform(struct!.l),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s: {
      value: cdktn.stringToHclTerraform(struct!.s),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ul: {
      value: cdktn.stringToHclTerraform(struct!.ul),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandMandatoryParametersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandMandatoryParametersValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._b !== undefined) {
      hasAnyValues = true;
      internalValueResult.b = this._b;
    }
    if (this._bin !== undefined) {
      hasAnyValues = true;
      internalValueResult.bin = this._bin;
    }
    if (this._d !== undefined) {
      hasAnyValues = true;
      internalValueResult.d = this._d;
    }
    if (this._i !== undefined) {
      hasAnyValues = true;
      internalValueResult.i = this._i;
    }
    if (this._l !== undefined) {
      hasAnyValues = true;
      internalValueResult.l = this._l;
    }
    if (this._s !== undefined) {
      hasAnyValues = true;
      internalValueResult.s = this._s;
    }
    if (this._ul !== undefined) {
      hasAnyValues = true;
      internalValueResult.ul = this._ul;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandMandatoryParametersValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._b = undefined;
      this._bin = undefined;
      this._d = undefined;
      this._i = undefined;
      this._l = undefined;
      this._s = undefined;
      this._ul = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._b = value.b;
      this._bin = value.bin;
      this._d = value.d;
      this._i = value.i;
      this._l = value.l;
      this._s = value.s;
      this._ul = value.ul;
    }
  }

  // b - computed: true, optional: true, required: false
  private _b?: boolean | cdktn.IResolvable; 
  public get b() {
    return this.getBooleanAttribute('b');
  }
  public set b(value: boolean | cdktn.IResolvable) {
    this._b = value;
  }
  public resetB() {
    this._b = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bInput() {
    return this._b;
  }

  // bin - computed: true, optional: true, required: false
  private _bin?: string; 
  public get bin() {
    return this.getStringAttribute('bin');
  }
  public set bin(value: string) {
    this._bin = value;
  }
  public resetBin() {
    this._bin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binInput() {
    return this._bin;
  }

  // d - computed: true, optional: true, required: false
  private _d?: number; 
  public get d() {
    return this.getNumberAttribute('d');
  }
  public set d(value: number) {
    this._d = value;
  }
  public resetD() {
    this._d = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dInput() {
    return this._d;
  }

  // i - computed: true, optional: true, required: false
  private _i?: number; 
  public get i() {
    return this.getNumberAttribute('i');
  }
  public set i(value: number) {
    this._i = value;
  }
  public resetI() {
    this._i = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iInput() {
    return this._i;
  }

  // l - computed: true, optional: true, required: false
  private _l?: string; 
  public get l() {
    return this.getStringAttribute('l');
  }
  public set l(value: string) {
    this._l = value;
  }
  public resetL() {
    this._l = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lInput() {
    return this._l;
  }

  // s - computed: true, optional: true, required: false
  private _s?: string; 
  public get s() {
    return this.getStringAttribute('s');
  }
  public set s(value: string) {
    this._s = value;
  }
  public resetS() {
    this._s = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sInput() {
    return this._s;
  }

  // ul - computed: true, optional: true, required: false
  private _ul?: string; 
  public get ul() {
    return this.getStringAttribute('ul');
  }
  public set ul(value: string) {
    this._ul = value;
  }
  public resetUl() {
    this._ul = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ulInput() {
    return this._ul;
  }
}
export interface IotCommandMandatoryParametersValueConditionsOperandNumberRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#max IotCommand#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#min IotCommand#min}
  */
  readonly min?: string;
}

export function iotCommandMandatoryParametersValueConditionsOperandNumberRangeToTerraform(struct?: IotCommandMandatoryParametersValueConditionsOperandNumberRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.stringToTerraform(struct!.max),
    min: cdktn.stringToTerraform(struct!.min),
  }
}


export function iotCommandMandatoryParametersValueConditionsOperandNumberRangeToHclTerraform(struct?: IotCommandMandatoryParametersValueConditionsOperandNumberRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktn.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandMandatoryParametersValueConditionsOperandNumberRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandMandatoryParametersValueConditionsOperandNumberRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: true, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface IotCommandMandatoryParametersValueConditionsOperand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#number IotCommand#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#number_range IotCommand#number_range}
  */
  readonly numberRange?: IotCommandMandatoryParametersValueConditionsOperandNumberRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#numbers IotCommand#numbers}
  */
  readonly numbers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#string IotCommand#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#strings IotCommand#strings}
  */
  readonly strings?: string[];
}

export function iotCommandMandatoryParametersValueConditionsOperandToTerraform(struct?: IotCommandMandatoryParametersValueConditionsOperand | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number: cdktn.stringToTerraform(struct!.number),
    number_range: iotCommandMandatoryParametersValueConditionsOperandNumberRangeToTerraform(struct!.numberRange),
    numbers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.numbers),
    string: cdktn.stringToTerraform(struct!.string),
    strings: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.strings),
  }
}


export function iotCommandMandatoryParametersValueConditionsOperandToHclTerraform(struct?: IotCommandMandatoryParametersValueConditionsOperand | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number: {
      value: cdktn.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_range: {
      value: iotCommandMandatoryParametersValueConditionsOperandNumberRangeToHclTerraform(struct!.numberRange),
      isBlock: true,
      type: "struct",
      storageClassType: "IotCommandMandatoryParametersValueConditionsOperandNumberRange",
    },
    numbers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.numbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string: {
      value: cdktn.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strings: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.strings),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandMandatoryParametersValueConditionsOperandOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandMandatoryParametersValueConditionsOperand | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._numberRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberRange = this._numberRange?.internalValue;
    }
    if (this._numbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.numbers = this._numbers;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._strings !== undefined) {
      hasAnyValues = true;
      internalValueResult.strings = this._strings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandMandatoryParametersValueConditionsOperand | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._numberRange.internalValue = undefined;
      this._numbers = undefined;
      this._string = undefined;
      this._strings = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._numberRange.internalValue = value.numberRange;
      this._numbers = value.numbers;
      this._string = value.string;
      this._strings = value.strings;
    }
  }

  // number - computed: true, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // number_range - computed: true, optional: true, required: false
  private _numberRange = new IotCommandMandatoryParametersValueConditionsOperandNumberRangeOutputReference(this, "number_range");
  public get numberRange() {
    return this._numberRange;
  }
  public putNumberRange(value: IotCommandMandatoryParametersValueConditionsOperandNumberRange) {
    this._numberRange.internalValue = value;
  }
  public resetNumberRange() {
    this._numberRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberRangeInput() {
    return this._numberRange.internalValue;
  }

  // numbers - computed: true, optional: true, required: false
  private _numbers?: string[]; 
  public get numbers() {
    return this.getListAttribute('numbers');
  }
  public set numbers(value: string[]) {
    this._numbers = value;
  }
  public resetNumbers() {
    this._numbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numbersInput() {
    return this._numbers;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // strings - computed: true, optional: true, required: false
  private _strings?: string[]; 
  public get strings() {
    return this.getListAttribute('strings');
  }
  public set strings(value: string[]) {
    this._strings = value;
  }
  public resetStrings() {
    this._strings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringsInput() {
    return this._strings;
  }
}
export interface IotCommandMandatoryParametersValueConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#comparison_operator IotCommand#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#operand IotCommand#operand}
  */
  readonly operand?: IotCommandMandatoryParametersValueConditionsOperand;
}

export function iotCommandMandatoryParametersValueConditionsToTerraform(struct?: IotCommandMandatoryParametersValueConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comparison_operator: cdktn.stringToTerraform(struct!.comparisonOperator),
    operand: iotCommandMandatoryParametersValueConditionsOperandToTerraform(struct!.operand),
  }
}


export function iotCommandMandatoryParametersValueConditionsToHclTerraform(struct?: IotCommandMandatoryParametersValueConditions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comparison_operator: {
      value: cdktn.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operand: {
      value: iotCommandMandatoryParametersValueConditionsOperandToHclTerraform(struct!.operand),
      isBlock: true,
      type: "struct",
      storageClassType: "IotCommandMandatoryParametersValueConditionsOperand",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandMandatoryParametersValueConditionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotCommandMandatoryParametersValueConditions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._operand?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operand = this._operand?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandMandatoryParametersValueConditions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._operand.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._operand.internalValue = value.operand;
    }
  }

  // comparison_operator - computed: true, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // operand - computed: true, optional: true, required: false
  private _operand = new IotCommandMandatoryParametersValueConditionsOperandOutputReference(this, "operand");
  public get operand() {
    return this._operand;
  }
  public putOperand(value: IotCommandMandatoryParametersValueConditionsOperand) {
    this._operand.internalValue = value;
  }
  public resetOperand() {
    this._operand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandInput() {
    return this._operand.internalValue;
  }
}

export class IotCommandMandatoryParametersValueConditionsList extends cdktn.ComplexList {
  public internalValue? : IotCommandMandatoryParametersValueConditions[] | cdktn.IResolvable

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
  public get(index: number): IotCommandMandatoryParametersValueConditionsOutputReference {
    return new IotCommandMandatoryParametersValueConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotCommandMandatoryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#default_value IotCommand#default_value}
  */
  readonly defaultValue?: IotCommandMandatoryParametersDefaultValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#description IotCommand#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#name IotCommand#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#type IotCommand#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#value IotCommand#value}
  */
  readonly value?: IotCommandMandatoryParametersValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#value_conditions IotCommand#value_conditions}
  */
  readonly valueConditions?: IotCommandMandatoryParametersValueConditions[] | cdktn.IResolvable;
}

export function iotCommandMandatoryParametersToTerraform(struct?: IotCommandMandatoryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: iotCommandMandatoryParametersDefaultValueToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: iotCommandMandatoryParametersValueToTerraform(struct!.value),
    value_conditions: cdktn.listMapper(iotCommandMandatoryParametersValueConditionsToTerraform, false)(struct!.valueConditions),
  }
}


export function iotCommandMandatoryParametersToHclTerraform(struct?: IotCommandMandatoryParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: iotCommandMandatoryParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "struct",
      storageClassType: "IotCommandMandatoryParametersDefaultValue",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: iotCommandMandatoryParametersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "IotCommandMandatoryParametersValue",
    },
    value_conditions: {
      value: cdktn.listMapperHcl(iotCommandMandatoryParametersValueConditionsToHclTerraform, false)(struct!.valueConditions),
      isBlock: true,
      type: "list",
      storageClassType: "IotCommandMandatoryParametersValueConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandMandatoryParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotCommandMandatoryParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    if (this._valueConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueConditions = this._valueConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandMandatoryParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value.internalValue = undefined;
      this._valueConditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._type = value.type;
      this._value.internalValue = value.value;
      this._valueConditions.internalValue = value.valueConditions;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue = new IotCommandMandatoryParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: IotCommandMandatoryParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: true, required: false
  private _value = new IotCommandMandatoryParametersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: IotCommandMandatoryParametersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // value_conditions - computed: true, optional: true, required: false
  private _valueConditions = new IotCommandMandatoryParametersValueConditionsList(this, "value_conditions", false);
  public get valueConditions() {
    return this._valueConditions;
  }
  public putValueConditions(value: IotCommandMandatoryParametersValueConditions[] | cdktn.IResolvable) {
    this._valueConditions.internalValue = value;
  }
  public resetValueConditions() {
    this._valueConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueConditionsInput() {
    return this._valueConditions.internalValue;
  }
}

export class IotCommandMandatoryParametersList extends cdktn.ComplexList {
  public internalValue? : IotCommandMandatoryParameters[] | cdktn.IResolvable

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
  public get(index: number): IotCommandMandatoryParametersOutputReference {
    return new IotCommandMandatoryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotCommandPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#content IotCommand#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#content_type IotCommand#content_type}
  */
  readonly contentType?: string;
}

export function iotCommandPayloadToTerraform(struct?: IotCommandPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
  }
}


export function iotCommandPayloadToHclTerraform(struct?: IotCommandPayload | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandPayloadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandPayload | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandPayload | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }
}
export interface IotCommandPreprocessorAwsJsonSubstitution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#output_format IotCommand#output_format}
  */
  readonly outputFormat?: string;
}

export function iotCommandPreprocessorAwsJsonSubstitutionToTerraform(struct?: IotCommandPreprocessorAwsJsonSubstitution | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    output_format: cdktn.stringToTerraform(struct!.outputFormat),
  }
}


export function iotCommandPreprocessorAwsJsonSubstitutionToHclTerraform(struct?: IotCommandPreprocessorAwsJsonSubstitution | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    output_format: {
      value: cdktn.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandPreprocessorAwsJsonSubstitutionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandPreprocessorAwsJsonSubstitution | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandPreprocessorAwsJsonSubstitution | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._outputFormat = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._outputFormat = value.outputFormat;
    }
  }

  // output_format - computed: true, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }
}
export interface IotCommandPreprocessor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#aws_json_substitution IotCommand#aws_json_substitution}
  */
  readonly awsJsonSubstitution?: IotCommandPreprocessorAwsJsonSubstitution;
}

export function iotCommandPreprocessorToTerraform(struct?: IotCommandPreprocessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_json_substitution: iotCommandPreprocessorAwsJsonSubstitutionToTerraform(struct!.awsJsonSubstitution),
  }
}


export function iotCommandPreprocessorToHclTerraform(struct?: IotCommandPreprocessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_json_substitution: {
      value: iotCommandPreprocessorAwsJsonSubstitutionToHclTerraform(struct!.awsJsonSubstitution),
      isBlock: true,
      type: "struct",
      storageClassType: "IotCommandPreprocessorAwsJsonSubstitution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotCommandPreprocessorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotCommandPreprocessor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsJsonSubstitution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsJsonSubstitution = this._awsJsonSubstitution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotCommandPreprocessor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsJsonSubstitution.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsJsonSubstitution.internalValue = value.awsJsonSubstitution;
    }
  }

  // aws_json_substitution - computed: true, optional: true, required: false
  private _awsJsonSubstitution = new IotCommandPreprocessorAwsJsonSubstitutionOutputReference(this, "aws_json_substitution");
  public get awsJsonSubstitution() {
    return this._awsJsonSubstitution;
  }
  public putAwsJsonSubstitution(value: IotCommandPreprocessorAwsJsonSubstitution) {
    this._awsJsonSubstitution.internalValue = value;
  }
  public resetAwsJsonSubstitution() {
    this._awsJsonSubstitution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsJsonSubstitutionInput() {
    return this._awsJsonSubstitution.internalValue;
  }
}
export interface IotCommandTags {
  /**
  * The tag's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#key IotCommand#key}
  */
  readonly key?: string;
  /**
  * The tag's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#value IotCommand#value}
  */
  readonly value?: string;
}

export function iotCommandTagsToTerraform(struct?: IotCommandTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotCommandTagsToHclTerraform(struct?: IotCommandTags | cdktn.IResolvable): any {
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

export class IotCommandTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotCommandTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotCommandTags | cdktn.IResolvable | undefined) {
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

export class IotCommandTagsList extends cdktn.ComplexList {
  public internalValue? : IotCommandTags[] | cdktn.IResolvable

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
  public get(index: number): IotCommandTagsOutputReference {
    return new IotCommandTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command awscc_iot_command}
*/
export class IotCommand extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iot_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotCommand resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotCommand to import
  * @param importFromId The id of the existing IotCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.93.0/docs/resources/iot_command awscc_iot_command} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotCommandConfig
  */
  public constructor(scope: Construct, id: string, config: IotCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iot_command',
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
    this._commandId = config.commandId;
    this._createdAt = config.createdAt;
    this._deprecated = config.deprecated;
    this._description = config.description;
    this._displayName = config.displayName;
    this._lastUpdatedAt = config.lastUpdatedAt;
    this._mandatoryParameters.internalValue = config.mandatoryParameters;
    this._namespace = config.namespace;
    this._payload.internalValue = config.payload;
    this._payloadTemplate = config.payloadTemplate;
    this._pendingDeletion = config.pendingDeletion;
    this._preprocessor.internalValue = config.preprocessor;
    this._roleArn = config.roleArn;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_arn - computed: true, optional: false, required: false
  public get commandArn() {
    return this.getStringAttribute('command_arn');
  }

  // command_id - computed: false, optional: false, required: true
  private _commandId?: string; 
  public get commandId() {
    return this.getStringAttribute('command_id');
  }
  public set commandId(value: string) {
    this._commandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandIdInput() {
    return this._commandId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // deprecated - computed: true, optional: true, required: false
  private _deprecated?: boolean | cdktn.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktn.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_at - computed: true, optional: true, required: false
  private _lastUpdatedAt?: string; 
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }
  public set lastUpdatedAt(value: string) {
    this._lastUpdatedAt = value;
  }
  public resetLastUpdatedAt() {
    this._lastUpdatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedAtInput() {
    return this._lastUpdatedAt;
  }

  // mandatory_parameters - computed: true, optional: true, required: false
  private _mandatoryParameters = new IotCommandMandatoryParametersList(this, "mandatory_parameters", false);
  public get mandatoryParameters() {
    return this._mandatoryParameters;
  }
  public putMandatoryParameters(value: IotCommandMandatoryParameters[] | cdktn.IResolvable) {
    this._mandatoryParameters.internalValue = value;
  }
  public resetMandatoryParameters() {
    this._mandatoryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryParametersInput() {
    return this._mandatoryParameters.internalValue;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new IotCommandPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: IotCommandPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }

  // payload_template - computed: true, optional: true, required: false
  private _payloadTemplate?: string; 
  public get payloadTemplate() {
    return this.getStringAttribute('payload_template');
  }
  public set payloadTemplate(value: string) {
    this._payloadTemplate = value;
  }
  public resetPayloadTemplate() {
    this._payloadTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTemplateInput() {
    return this._payloadTemplate;
  }

  // pending_deletion - computed: true, optional: true, required: false
  private _pendingDeletion?: boolean | cdktn.IResolvable; 
  public get pendingDeletion() {
    return this.getBooleanAttribute('pending_deletion');
  }
  public set pendingDeletion(value: boolean | cdktn.IResolvable) {
    this._pendingDeletion = value;
  }
  public resetPendingDeletion() {
    this._pendingDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDeletionInput() {
    return this._pendingDeletion;
  }

  // preprocessor - computed: true, optional: true, required: false
  private _preprocessor = new IotCommandPreprocessorOutputReference(this, "preprocessor");
  public get preprocessor() {
    return this._preprocessor;
  }
  public putPreprocessor(value: IotCommandPreprocessor) {
    this._preprocessor.internalValue = value;
  }
  public resetPreprocessor() {
    this._preprocessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preprocessorInput() {
    return this._preprocessor.internalValue;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new IotCommandTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotCommandTags[] | cdktn.IResolvable) {
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
      command_id: cdktn.stringToTerraform(this._commandId),
      created_at: cdktn.stringToTerraform(this._createdAt),
      deprecated: cdktn.booleanToTerraform(this._deprecated),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      last_updated_at: cdktn.stringToTerraform(this._lastUpdatedAt),
      mandatory_parameters: cdktn.listMapper(iotCommandMandatoryParametersToTerraform, false)(this._mandatoryParameters.internalValue),
      namespace: cdktn.stringToTerraform(this._namespace),
      payload: iotCommandPayloadToTerraform(this._payload.internalValue),
      payload_template: cdktn.stringToTerraform(this._payloadTemplate),
      pending_deletion: cdktn.booleanToTerraform(this._pendingDeletion),
      preprocessor: iotCommandPreprocessorToTerraform(this._preprocessor.internalValue),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      tags: cdktn.listMapper(iotCommandTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_id: {
        value: cdktn.stringToHclTerraform(this._commandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktn.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated: {
        value: cdktn.booleanToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated_at: {
        value: cdktn.stringToHclTerraform(this._lastUpdatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory_parameters: {
        value: cdktn.listMapperHcl(iotCommandMandatoryParametersToHclTerraform, false)(this._mandatoryParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotCommandMandatoryParametersList",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload: {
        value: iotCommandPayloadToHclTerraform(this._payload.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotCommandPayload",
      },
      payload_template: {
        value: cdktn.stringToHclTerraform(this._payloadTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_deletion: {
        value: cdktn.booleanToHclTerraform(this._pendingDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preprocessor: {
        value: iotCommandPreprocessorToHclTerraform(this._preprocessor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotCommandPreprocessor",
      },
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotCommandTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotCommandTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
