// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityhubConfigurationPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * An object that defines how Security Hub is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}
  */
  readonly configurationPolicy: SecurityhubConfigurationPolicyConfigurationPolicy;
  /**
  * The description of the configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of the configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}
  */
  readonly name: string;
  /**
  * A key-value pair to associate with a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#tags SecurityhubConfigurationPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue {
  /**
  * A control parameter that is a boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#boolean SecurityhubConfigurationPolicy#boolean}
  */
  readonly boolean?: boolean | cdktn.IResolvable;
  /**
  * A control parameter that is a double.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}
  */
  readonly double?: number;
  /**
  * A control parameter that is an enum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}
  */
  readonly enum?: string;
  /**
  * A control parameter that is a list of enums.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}
  */
  readonly enumList?: string[];
  /**
  * A control parameter that is an integer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#integer SecurityhubConfigurationPolicy#integer}
  */
  readonly integer?: number;
  /**
  * A control parameter that is a list of integers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#integer_list SecurityhubConfigurationPolicy#integer_list}
  */
  readonly integerList?: number[];
  /**
  * A control parameter that is a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}
  */
  readonly string?: string;
  /**
  * A control parameter that is a list of strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}
  */
  readonly stringList?: string[];
}

export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    boolean: cdktn.booleanToTerraform(struct!.boolean),
    double: cdktn.numberToTerraform(struct!.double),
    enum: cdktn.stringToTerraform(struct!.enum),
    enum_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enumList),
    integer: cdktn.numberToTerraform(struct!.integer),
    integer_list: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.integerList),
    string: cdktn.stringToTerraform(struct!.string),
    string_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stringList),
  }
}


export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    boolean: {
      value: cdktn.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    double: {
      value: cdktn.numberToHclTerraform(struct!.double),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enum: {
      value: cdktn.stringToHclTerraform(struct!.enum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enumList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    integer: {
      value: cdktn.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    string: {
      value: cdktn.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._double !== undefined) {
      hasAnyValues = true;
      internalValueResult.double = this._double;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumList !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumList = this._enumList;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._double = undefined;
      this._enum = undefined;
      this._enumList = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._string = undefined;
      this._stringList = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._double = value.double;
      this._enum = value.enum;
      this._enumList = value.enumList;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._string = value.string;
      this._stringList = value.stringList;
    }
  }

  // boolean - computed: true, optional: true, required: false
  private _boolean?: boolean | cdktn.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktn.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // double - computed: true, optional: true, required: false
  private _double?: number; 
  public get double() {
    return this.getNumberAttribute('double');
  }
  public set double(value: number) {
    this._double = value;
  }
  public resetDouble() {
    this._double = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleInput() {
    return this._double;
  }

  // enum - computed: true, optional: true, required: false
  private _enum?: string; 
  public get enum() {
    return this.getStringAttribute('enum');
  }
  public set enum(value: string) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_list - computed: true, optional: true, required: false
  private _enumList?: string[]; 
  public get enumList() {
    return this.getListAttribute('enum_list');
  }
  public set enumList(value: string[]) {
    this._enumList = value;
  }
  public resetEnumList() {
    this._enumList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumListInput() {
    return this._enumList;
  }

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
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

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters {
  /**
  * An object that includes the data type of a security control parameter and its current value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}
  */
  readonly value?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue;
  /**
  * Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}
  */
  readonly valueType?: string;
}

export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueToTerraform(struct!.value),
    value_type: cdktn.stringToTerraform(struct!.valueType),
  }
}


export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue",
    },
    value_type: {
      value: cdktn.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value.internalValue = undefined;
      this._valueType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value.internalValue = value.value;
      this._valueType = value.valueType;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value = new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap extends cdktn.ComplexMap {
  public internalValue? : { [key: string]: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters } | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute);
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference {
    return new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters {
  /**
  * An object that specifies parameter values for a control in a configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#parameters SecurityhubConfigurationPolicy#parameters}
  */
  readonly parameters?: { [key: string]: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters } | cdktn.IResolvable;
  /**
  * The ID of the security control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}
  */
  readonly securityControlId?: string;
}

export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameters: cdktn.hashMapper(securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersToTerraform)(struct!.parameters),
    security_control_id: cdktn.stringToTerraform(struct!.securityControlId),
  }
}


export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameters: {
      value: cdktn.hashMapperHcl(securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersToHclTerraform)(struct!.parameters),
      isBlock: true,
      type: "map",
      storageClassType: "SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap",
    },
    security_control_id: {
      value: cdktn.stringToHclTerraform(struct!.securityControlId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._securityControlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityControlId = this._securityControlId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
      this._securityControlId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
      this._securityControlId = value.securityControlId;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: { [key: string]: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters } | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // security_control_id - computed: true, optional: true, required: false
  private _securityControlId?: string; 
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }
  public set securityControlId(value: string) {
    this._securityControlId = value;
  }
  public resetSecurityControlId() {
    this._securityControlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlIdInput() {
    return this._securityControlId;
  }
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList extends cdktn.ComplexList {
  public internalValue? : SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters[] | cdktn.IResolvable

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
  public get(index: number): SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference {
    return new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration {
  /**
  * A list of security controls that are disabled in the configuration policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#disabled_security_control_identifiers SecurityhubConfigurationPolicy#disabled_security_control_identifiers}
  */
  readonly disabledSecurityControlIdentifiers?: string[];
  /**
  * A list of security controls that are enabled in the configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#enabled_security_control_identifiers SecurityhubConfigurationPolicy#enabled_security_control_identifiers}
  */
  readonly enabledSecurityControlIdentifiers?: string[];
  /**
  * A list of security controls and control parameter values that are included in a configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameters SecurityhubConfigurationPolicy#security_control_custom_parameters}
  */
  readonly securityControlCustomParameters?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters[] | cdktn.IResolvable;
}

export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disabled_security_control_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.disabledSecurityControlIdentifiers),
    enabled_security_control_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledSecurityControlIdentifiers),
    security_control_custom_parameters: cdktn.listMapper(securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersToTerraform, false)(struct!.securityControlCustomParameters),
  }
}


export function securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disabled_security_control_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.disabledSecurityControlIdentifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled_security_control_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledSecurityControlIdentifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_control_custom_parameters: {
      value: cdktn.listMapperHcl(securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersToHclTerraform, false)(struct!.securityControlCustomParameters),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledSecurityControlIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledSecurityControlIdentifiers = this._disabledSecurityControlIdentifiers;
    }
    if (this._enabledSecurityControlIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledSecurityControlIdentifiers = this._enabledSecurityControlIdentifiers;
    }
    if (this._securityControlCustomParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityControlCustomParameters = this._securityControlCustomParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabledSecurityControlIdentifiers = undefined;
      this._enabledSecurityControlIdentifiers = undefined;
      this._securityControlCustomParameters.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabledSecurityControlIdentifiers = value.disabledSecurityControlIdentifiers;
      this._enabledSecurityControlIdentifiers = value.enabledSecurityControlIdentifiers;
      this._securityControlCustomParameters.internalValue = value.securityControlCustomParameters;
    }
  }

  // disabled_security_control_identifiers - computed: true, optional: true, required: false
  private _disabledSecurityControlIdentifiers?: string[]; 
  public get disabledSecurityControlIdentifiers() {
    return this.getListAttribute('disabled_security_control_identifiers');
  }
  public set disabledSecurityControlIdentifiers(value: string[]) {
    this._disabledSecurityControlIdentifiers = value;
  }
  public resetDisabledSecurityControlIdentifiers() {
    this._disabledSecurityControlIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSecurityControlIdentifiersInput() {
    return this._disabledSecurityControlIdentifiers;
  }

  // enabled_security_control_identifiers - computed: true, optional: true, required: false
  private _enabledSecurityControlIdentifiers?: string[]; 
  public get enabledSecurityControlIdentifiers() {
    return this.getListAttribute('enabled_security_control_identifiers');
  }
  public set enabledSecurityControlIdentifiers(value: string[]) {
    this._enabledSecurityControlIdentifiers = value;
  }
  public resetEnabledSecurityControlIdentifiers() {
    this._enabledSecurityControlIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledSecurityControlIdentifiersInput() {
    return this._enabledSecurityControlIdentifiers;
  }

  // security_control_custom_parameters - computed: true, optional: true, required: false
  private _securityControlCustomParameters = new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList(this, "security_control_custom_parameters", false);
  public get securityControlCustomParameters() {
    return this._securityControlCustomParameters;
  }
  public putSecurityControlCustomParameters(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters[] | cdktn.IResolvable) {
    this._securityControlCustomParameters.internalValue = value;
  }
  public resetSecurityControlCustomParameters() {
    this._securityControlCustomParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlCustomParametersInput() {
    return this._securityControlCustomParameters.internalValue;
  }
}
export interface SecurityhubConfigurationPolicyConfigurationPolicySecurityHub {
  /**
  * A list that defines which security standards are enabled in the configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#enabled_standard_identifiers SecurityhubConfigurationPolicy#enabled_standard_identifiers}
  */
  readonly enabledStandardIdentifiers?: string[];
  /**
  * An object that defines which security controls are enabled in an AWS Security Hub configuration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}
  */
  readonly securityControlsConfiguration?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration;
  /**
  * Indicates whether Security Hub is enabled in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}
  */
  readonly serviceEnabled?: boolean | cdktn.IResolvable;
}

export function securityhubConfigurationPolicyConfigurationPolicySecurityHubToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_standard_identifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledStandardIdentifiers),
    security_controls_configuration: securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationToTerraform(struct!.securityControlsConfiguration),
    service_enabled: cdktn.booleanToTerraform(struct!.serviceEnabled),
  }
}


export function securityhubConfigurationPolicyConfigurationPolicySecurityHubToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_standard_identifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledStandardIdentifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_controls_configuration: {
      value: securityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationToHclTerraform(struct!.securityControlsConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration",
    },
    service_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.serviceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicySecurityHub | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledStandardIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledStandardIdentifiers = this._enabledStandardIdentifiers;
    }
    if (this._securityControlsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityControlsConfiguration = this._securityControlsConfiguration?.internalValue;
    }
    if (this._serviceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEnabled = this._serviceEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledStandardIdentifiers = undefined;
      this._securityControlsConfiguration.internalValue = undefined;
      this._serviceEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledStandardIdentifiers = value.enabledStandardIdentifiers;
      this._securityControlsConfiguration.internalValue = value.securityControlsConfiguration;
      this._serviceEnabled = value.serviceEnabled;
    }
  }

  // enabled_standard_identifiers - computed: true, optional: true, required: false
  private _enabledStandardIdentifiers?: string[]; 
  public get enabledStandardIdentifiers() {
    return this.getListAttribute('enabled_standard_identifiers');
  }
  public set enabledStandardIdentifiers(value: string[]) {
    this._enabledStandardIdentifiers = value;
  }
  public resetEnabledStandardIdentifiers() {
    this._enabledStandardIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledStandardIdentifiersInput() {
    return this._enabledStandardIdentifiers;
  }

  // security_controls_configuration - computed: true, optional: true, required: false
  private _securityControlsConfiguration = new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference(this, "security_controls_configuration");
  public get securityControlsConfiguration() {
    return this._securityControlsConfiguration;
  }
  public putSecurityControlsConfiguration(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration) {
    this._securityControlsConfiguration.internalValue = value;
  }
  public resetSecurityControlsConfiguration() {
    this._securityControlsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlsConfigurationInput() {
    return this._securityControlsConfiguration.internalValue;
  }

  // service_enabled - computed: true, optional: true, required: false
  private _serviceEnabled?: boolean | cdktn.IResolvable; 
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }
  public set serviceEnabled(value: boolean | cdktn.IResolvable) {
    this._serviceEnabled = value;
  }
  public resetServiceEnabled() {
    this._serviceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEnabledInput() {
    return this._serviceEnabled;
  }
}
export interface SecurityhubConfigurationPolicyConfigurationPolicy {
  /**
  * An object that defines how AWS Security Hub is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#security_hub SecurityhubConfigurationPolicy#security_hub}
  */
  readonly securityHub?: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub;
}

export function securityhubConfigurationPolicyConfigurationPolicyToTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    security_hub: securityhubConfigurationPolicyConfigurationPolicySecurityHubToTerraform(struct!.securityHub),
  }
}


export function securityhubConfigurationPolicyConfigurationPolicyToHclTerraform(struct?: SecurityhubConfigurationPolicyConfigurationPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    security_hub: {
      value: securityhubConfigurationPolicyConfigurationPolicySecurityHubToHclTerraform(struct!.securityHub),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityhubConfigurationPolicyConfigurationPolicySecurityHub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityhubConfigurationPolicyConfigurationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityhubConfigurationPolicyConfigurationPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityHub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityHub = this._securityHub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityhubConfigurationPolicyConfigurationPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityHub.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityHub.internalValue = value.securityHub;
    }
  }

  // security_hub - computed: true, optional: true, required: false
  private _securityHub = new SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference(this, "security_hub");
  public get securityHub() {
    return this._securityHub;
  }
  public putSecurityHub(value: SecurityhubConfigurationPolicyConfigurationPolicySecurityHub) {
    this._securityHub.internalValue = value;
  }
  public resetSecurityHub() {
    this._securityHub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHubInput() {
    return this._securityHub.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy awscc_securityhub_configuration_policy}
*/
export class SecurityhubConfigurationPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_securityhub_configuration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubConfigurationPolicy to import
  * @param importFromId The id of the existing SecurityhubConfigurationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubConfigurationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_configuration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/securityhub_configuration_policy awscc_securityhub_configuration_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubConfigurationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubConfigurationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_securityhub_configuration_policy',
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
    this._configurationPolicy.internalValue = config.configurationPolicy;
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_policy - computed: false, optional: false, required: true
  private _configurationPolicy = new SecurityhubConfigurationPolicyConfigurationPolicyOutputReference(this, "configuration_policy");
  public get configurationPolicy() {
    return this._configurationPolicy;
  }
  public putConfigurationPolicy(value: SecurityhubConfigurationPolicyConfigurationPolicy) {
    this._configurationPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationPolicyInput() {
    return this._configurationPolicy.internalValue;
  }

  // configuration_policy_id - computed: true, optional: false, required: false
  public get configurationPolicyId() {
    return this.getStringAttribute('configuration_policy_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_enabled - computed: true, optional: false, required: false
  public get serviceEnabled() {
    return this.getBooleanAttribute('service_enabled');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_policy: securityhubConfigurationPolicyConfigurationPolicyToTerraform(this._configurationPolicy.internalValue),
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_policy: {
        value: securityhubConfigurationPolicyConfigurationPolicyToHclTerraform(this._configurationPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityhubConfigurationPolicyConfigurationPolicy",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
