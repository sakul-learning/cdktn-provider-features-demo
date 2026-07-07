// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatazoneProjectProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}
  */
  readonly allowCustomProjectResourceTags?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}
  */
  readonly domainIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}
  */
  readonly domainUnitIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}
  */
  readonly environmentConfigurations?: DatazoneProjectProfileEnvironmentConfigurations[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}
  */
  readonly projectResourceTags?: DatazoneProjectProfileProjectResourceTags[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}
  */
  readonly projectResourceTagsDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}
  */
  readonly useDefaultConfigurations?: boolean | cdktn.IResolvable;
}
export interface DatazoneProjectProfileEnvironmentConfigurationsAwsAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}
  */
  readonly awsAccountId?: string;
}

export function datazoneProjectProfileEnvironmentConfigurationsAwsAccountToTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.stringToTerraform(struct!.awsAccountId),
  }
}


export function datazoneProjectProfileEnvironmentConfigurationsAwsAccountToHclTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneProjectProfileEnvironmentConfigurationsAwsAccount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId = value.awsAccountId;
    }
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }
}
export interface DatazoneProjectProfileEnvironmentConfigurationsAwsRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}
  */
  readonly regionName?: string;
}

export function datazoneProjectProfileEnvironmentConfigurationsAwsRegionToTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region_name: cdktn.stringToTerraform(struct!.regionName),
  }
}


export function datazoneProjectProfileEnvironmentConfigurationsAwsRegionToHclTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region_name: {
      value: cdktn.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneProjectProfileEnvironmentConfigurationsAwsRegion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionName = value.regionName;
    }
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }
}
export interface DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}
  */
  readonly isEditable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}
  */
  readonly value?: string;
}

export function datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesToTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_editable: cdktn.booleanToTerraform(struct!.isEditable),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesToHclTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_editable: {
      value: cdktn.booleanToHclTerraform(struct!.isEditable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEditable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEditable = this._isEditable;
    }
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

  public set internalValue(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEditable = undefined;
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
      this._isEditable = value.isEditable;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_editable - computed: true, optional: true, required: false
  private _isEditable?: boolean | cdktn.IResolvable; 
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }
  public set isEditable(value: boolean | cdktn.IResolvable) {
    this._isEditable = value;
  }
  public resetIsEditable() {
    this._isEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEditableInput() {
    return this._isEditable;
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

export class DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference {
    return new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}
  */
  readonly isEditable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}
  */
  readonly value?: string;
}

export function datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersToTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_editable: cdktn.booleanToTerraform(struct!.isEditable),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersToHclTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_editable: {
      value: cdktn.booleanToHclTerraform(struct!.isEditable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEditable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEditable = this._isEditable;
    }
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

  public set internalValue(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEditable = undefined;
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
      this._isEditable = value.isEditable;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // is_editable - computed: true, optional: true, required: false
  private _isEditable?: boolean | cdktn.IResolvable; 
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }
  public set isEditable(value: boolean | cdktn.IResolvable) {
    this._isEditable = value;
  }
  public resetIsEditable() {
    this._isEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEditableInput() {
    return this._isEditable;
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

export class DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference {
    return new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}
  */
  readonly parameterOverrides?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}
  */
  readonly resolvedParameters?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}
  */
  readonly ssmPath?: string;
}

export function datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersToTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parameter_overrides: cdktn.listMapper(datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesToTerraform, false)(struct!.parameterOverrides),
    resolved_parameters: cdktn.listMapper(datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersToTerraform, false)(struct!.resolvedParameters),
    ssm_path: cdktn.stringToTerraform(struct!.ssmPath),
  }
}


export function datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersToHclTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parameter_overrides: {
      value: cdktn.listMapperHcl(datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesToHclTerraform, false)(struct!.parameterOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList",
    },
    resolved_parameters: {
      value: cdktn.listMapperHcl(datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersToHclTerraform, false)(struct!.resolvedParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList",
    },
    ssm_path: {
      value: cdktn.stringToHclTerraform(struct!.ssmPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterOverrides = this._parameterOverrides?.internalValue;
    }
    if (this._resolvedParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedParameters = this._resolvedParameters?.internalValue;
    }
    if (this._ssmPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmPath = this._ssmPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterOverrides.internalValue = undefined;
      this._resolvedParameters.internalValue = undefined;
      this._ssmPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterOverrides.internalValue = value.parameterOverrides;
      this._resolvedParameters.internalValue = value.resolvedParameters;
      this._ssmPath = value.ssmPath;
    }
  }

  // parameter_overrides - computed: true, optional: true, required: false
  private _parameterOverrides = new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public putParameterOverrides(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides[] | cdktn.IResolvable) {
    this._parameterOverrides.internalValue = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides.internalValue;
  }

  // resolved_parameters - computed: true, optional: true, required: false
  private _resolvedParameters = new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(this, "resolved_parameters", false);
  public get resolvedParameters() {
    return this._resolvedParameters;
  }
  public putResolvedParameters(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters[] | cdktn.IResolvable) {
    this._resolvedParameters.internalValue = value;
  }
  public resetResolvedParameters() {
    this._resolvedParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedParametersInput() {
    return this._resolvedParameters.internalValue;
  }

  // ssm_path - computed: true, optional: true, required: false
  private _ssmPath?: string; 
  public get ssmPath() {
    return this.getStringAttribute('ssm_path');
  }
  public set ssmPath(value: string) {
    this._ssmPath = value;
  }
  public resetSsmPath() {
    this._ssmPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmPathInput() {
    return this._ssmPath;
  }
}
export interface DatazoneProjectProfileEnvironmentConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}
  */
  readonly awsAccount?: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}
  */
  readonly awsRegion?: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}
  */
  readonly configurationParameters?: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}
  */
  readonly deploymentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}
  */
  readonly deploymentOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}
  */
  readonly environmentBlueprintId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}
  */
  readonly environmentConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}
  */
  readonly name?: string;
}

export function datazoneProjectProfileEnvironmentConfigurationsToTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account: datazoneProjectProfileEnvironmentConfigurationsAwsAccountToTerraform(struct!.awsAccount),
    aws_region: datazoneProjectProfileEnvironmentConfigurationsAwsRegionToTerraform(struct!.awsRegion),
    configuration_parameters: datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersToTerraform(struct!.configurationParameters),
    deployment_mode: cdktn.stringToTerraform(struct!.deploymentMode),
    deployment_order: cdktn.numberToTerraform(struct!.deploymentOrder),
    description: cdktn.stringToTerraform(struct!.description),
    environment_blueprint_id: cdktn.stringToTerraform(struct!.environmentBlueprintId),
    environment_configuration_id: cdktn.stringToTerraform(struct!.environmentConfigurationId),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function datazoneProjectProfileEnvironmentConfigurationsToHclTerraform(struct?: DatazoneProjectProfileEnvironmentConfigurations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account: {
      value: datazoneProjectProfileEnvironmentConfigurationsAwsAccountToHclTerraform(struct!.awsAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazoneProjectProfileEnvironmentConfigurationsAwsAccount",
    },
    aws_region: {
      value: datazoneProjectProfileEnvironmentConfigurationsAwsRegionToHclTerraform(struct!.awsRegion),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazoneProjectProfileEnvironmentConfigurationsAwsRegion",
    },
    configuration_parameters: {
      value: datazoneProjectProfileEnvironmentConfigurationsConfigurationParametersToHclTerraform(struct!.configurationParameters),
      isBlock: true,
      type: "struct",
      storageClassType: "DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters",
    },
    deployment_mode: {
      value: cdktn.stringToHclTerraform(struct!.deploymentMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_order: {
      value: cdktn.numberToHclTerraform(struct!.deploymentOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_blueprint_id: {
      value: cdktn.stringToHclTerraform(struct!.environmentBlueprintId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_configuration_id: {
      value: cdktn.stringToHclTerraform(struct!.environmentConfigurationId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatazoneProjectProfileEnvironmentConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectProfileEnvironmentConfigurations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccount = this._awsAccount?.internalValue;
    }
    if (this._awsRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion?.internalValue;
    }
    if (this._configurationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationParameters = this._configurationParameters?.internalValue;
    }
    if (this._deploymentMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentMode = this._deploymentMode;
    }
    if (this._deploymentOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentOrder = this._deploymentOrder;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._environmentBlueprintId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentBlueprintId = this._environmentBlueprintId;
    }
    if (this._environmentConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentConfigurationId = this._environmentConfigurationId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatazoneProjectProfileEnvironmentConfigurations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccount.internalValue = undefined;
      this._awsRegion.internalValue = undefined;
      this._configurationParameters.internalValue = undefined;
      this._deploymentMode = undefined;
      this._deploymentOrder = undefined;
      this._description = undefined;
      this._environmentBlueprintId = undefined;
      this._environmentConfigurationId = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccount.internalValue = value.awsAccount;
      this._awsRegion.internalValue = value.awsRegion;
      this._configurationParameters.internalValue = value.configurationParameters;
      this._deploymentMode = value.deploymentMode;
      this._deploymentOrder = value.deploymentOrder;
      this._description = value.description;
      this._environmentBlueprintId = value.environmentBlueprintId;
      this._environmentConfigurationId = value.environmentConfigurationId;
      this._name = value.name;
    }
  }

  // aws_account - computed: true, optional: true, required: false
  private _awsAccount = new DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(this, "aws_account");
  public get awsAccount() {
    return this._awsAccount;
  }
  public putAwsAccount(value: DatazoneProjectProfileEnvironmentConfigurationsAwsAccount) {
    this._awsAccount.internalValue = value;
  }
  public resetAwsAccount() {
    this._awsAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountInput() {
    return this._awsAccount.internalValue;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion = new DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(this, "aws_region");
  public get awsRegion() {
    return this._awsRegion;
  }
  public putAwsRegion(value: DatazoneProjectProfileEnvironmentConfigurationsAwsRegion) {
    this._awsRegion.internalValue = value;
  }
  public resetAwsRegion() {
    this._awsRegion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion.internalValue;
  }

  // configuration_parameters - computed: true, optional: true, required: false
  private _configurationParameters = new DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(this, "configuration_parameters");
  public get configurationParameters() {
    return this._configurationParameters;
  }
  public putConfigurationParameters(value: DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters) {
    this._configurationParameters.internalValue = value;
  }
  public resetConfigurationParameters() {
    this._configurationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationParametersInput() {
    return this._configurationParameters.internalValue;
  }

  // deployment_mode - computed: true, optional: true, required: false
  private _deploymentMode?: string; 
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }
  public set deploymentMode(value: string) {
    this._deploymentMode = value;
  }
  public resetDeploymentMode() {
    this._deploymentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentModeInput() {
    return this._deploymentMode;
  }

  // deployment_order - computed: true, optional: true, required: false
  private _deploymentOrder?: number; 
  public get deploymentOrder() {
    return this.getNumberAttribute('deployment_order');
  }
  public set deploymentOrder(value: number) {
    this._deploymentOrder = value;
  }
  public resetDeploymentOrder() {
    this._deploymentOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOrderInput() {
    return this._deploymentOrder;
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

  // environment_blueprint_id - computed: true, optional: true, required: false
  private _environmentBlueprintId?: string; 
  public get environmentBlueprintId() {
    return this.getStringAttribute('environment_blueprint_id');
  }
  public set environmentBlueprintId(value: string) {
    this._environmentBlueprintId = value;
  }
  public resetEnvironmentBlueprintId() {
    this._environmentBlueprintId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentBlueprintIdInput() {
    return this._environmentBlueprintId;
  }

  // environment_configuration_id - computed: true, optional: true, required: false
  private _environmentConfigurationId?: string; 
  public get environmentConfigurationId() {
    return this.getStringAttribute('environment_configuration_id');
  }
  public set environmentConfigurationId(value: string) {
    this._environmentConfigurationId = value;
  }
  public resetEnvironmentConfigurationId() {
    this._environmentConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigurationIdInput() {
    return this._environmentConfigurationId;
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
}

export class DatazoneProjectProfileEnvironmentConfigurationsList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectProfileEnvironmentConfigurations[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectProfileEnvironmentConfigurationsOutputReference {
    return new DatazoneProjectProfileEnvironmentConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatazoneProjectProfileProjectResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}
  */
  readonly isValueEditable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}
  */
  readonly value?: string;
}

export function datazoneProjectProfileProjectResourceTagsToTerraform(struct?: DatazoneProjectProfileProjectResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    is_value_editable: cdktn.booleanToTerraform(struct!.isValueEditable),
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function datazoneProjectProfileProjectResourceTagsToHclTerraform(struct?: DatazoneProjectProfileProjectResourceTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    is_value_editable: {
      value: cdktn.booleanToHclTerraform(struct!.isValueEditable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DatazoneProjectProfileProjectResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatazoneProjectProfileProjectResourceTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isValueEditable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValueEditable = this._isValueEditable;
    }
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

  public set internalValue(value: DatazoneProjectProfileProjectResourceTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isValueEditable = undefined;
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
      this._isValueEditable = value.isValueEditable;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // is_value_editable - computed: true, optional: true, required: false
  private _isValueEditable?: boolean | cdktn.IResolvable; 
  public get isValueEditable() {
    return this.getBooleanAttribute('is_value_editable');
  }
  public set isValueEditable(value: boolean | cdktn.IResolvable) {
    this._isValueEditable = value;
  }
  public resetIsValueEditable() {
    this._isValueEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValueEditableInput() {
    return this._isValueEditable;
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

export class DatazoneProjectProfileProjectResourceTagsList extends cdktn.ComplexList {
  public internalValue? : DatazoneProjectProfileProjectResourceTags[] | cdktn.IResolvable

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
  public get(index: number): DatazoneProjectProfileProjectResourceTagsOutputReference {
    return new DatazoneProjectProfileProjectResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile awscc_datazone_project_profile}
*/
export class DatazoneProjectProfile extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_project_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneProjectProfile to import
  * @param importFromId The id of the existing DatazoneProjectProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneProjectProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_project_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/resources/datazone_project_profile awscc_datazone_project_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneProjectProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneProjectProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_project_profile',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowCustomProjectResourceTags = config.allowCustomProjectResourceTags;
    this._description = config.description;
    this._domainIdentifier = config.domainIdentifier;
    this._domainUnitIdentifier = config.domainUnitIdentifier;
    this._environmentConfigurations.internalValue = config.environmentConfigurations;
    this._name = config.name;
    this._projectResourceTags.internalValue = config.projectResourceTags;
    this._projectResourceTagsDescription = config.projectResourceTagsDescription;
    this._status = config.status;
    this._useDefaultConfigurations = config.useDefaultConfigurations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_custom_project_resource_tags - computed: true, optional: true, required: false
  private _allowCustomProjectResourceTags?: boolean | cdktn.IResolvable; 
  public get allowCustomProjectResourceTags() {
    return this.getBooleanAttribute('allow_custom_project_resource_tags');
  }
  public set allowCustomProjectResourceTags(value: boolean | cdktn.IResolvable) {
    this._allowCustomProjectResourceTags = value;
  }
  public resetAllowCustomProjectResourceTags() {
    this._allowCustomProjectResourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomProjectResourceTagsInput() {
    return this._allowCustomProjectResourceTags;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_identifier - computed: true, optional: true, required: false
  private _domainIdentifier?: string; 
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }
  public set domainIdentifier(value: string) {
    this._domainIdentifier = value;
  }
  public resetDomainIdentifier() {
    this._domainIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdentifierInput() {
    return this._domainIdentifier;
  }

  // domain_unit_id - computed: true, optional: false, required: false
  public get domainUnitId() {
    return this.getStringAttribute('domain_unit_id');
  }

  // domain_unit_identifier - computed: true, optional: true, required: false
  private _domainUnitIdentifier?: string; 
  public get domainUnitIdentifier() {
    return this.getStringAttribute('domain_unit_identifier');
  }
  public set domainUnitIdentifier(value: string) {
    this._domainUnitIdentifier = value;
  }
  public resetDomainUnitIdentifier() {
    this._domainUnitIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUnitIdentifierInput() {
    return this._domainUnitIdentifier;
  }

  // environment_configurations - computed: true, optional: true, required: false
  private _environmentConfigurations = new DatazoneProjectProfileEnvironmentConfigurationsList(this, "environment_configurations", false);
  public get environmentConfigurations() {
    return this._environmentConfigurations;
  }
  public putEnvironmentConfigurations(value: DatazoneProjectProfileEnvironmentConfigurations[] | cdktn.IResolvable) {
    this._environmentConfigurations.internalValue = value;
  }
  public resetEnvironmentConfigurations() {
    this._environmentConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigurationsInput() {
    return this._environmentConfigurations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
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

  // project_profile_id - computed: true, optional: false, required: false
  public get projectProfileId() {
    return this.getStringAttribute('project_profile_id');
  }

  // project_resource_tags - computed: true, optional: true, required: false
  private _projectResourceTags = new DatazoneProjectProfileProjectResourceTagsList(this, "project_resource_tags", false);
  public get projectResourceTags() {
    return this._projectResourceTags;
  }
  public putProjectResourceTags(value: DatazoneProjectProfileProjectResourceTags[] | cdktn.IResolvable) {
    this._projectResourceTags.internalValue = value;
  }
  public resetProjectResourceTags() {
    this._projectResourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectResourceTagsInput() {
    return this._projectResourceTags.internalValue;
  }

  // project_resource_tags_description - computed: true, optional: true, required: false
  private _projectResourceTagsDescription?: string; 
  public get projectResourceTagsDescription() {
    return this.getStringAttribute('project_resource_tags_description');
  }
  public set projectResourceTagsDescription(value: string) {
    this._projectResourceTagsDescription = value;
  }
  public resetProjectResourceTagsDescription() {
    this._projectResourceTagsDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectResourceTagsDescriptionInput() {
    return this._projectResourceTagsDescription;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // use_default_configurations - computed: true, optional: true, required: false
  private _useDefaultConfigurations?: boolean | cdktn.IResolvable; 
  public get useDefaultConfigurations() {
    return this.getBooleanAttribute('use_default_configurations');
  }
  public set useDefaultConfigurations(value: boolean | cdktn.IResolvable) {
    this._useDefaultConfigurations = value;
  }
  public resetUseDefaultConfigurations() {
    this._useDefaultConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultConfigurationsInput() {
    return this._useDefaultConfigurations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_custom_project_resource_tags: cdktn.booleanToTerraform(this._allowCustomProjectResourceTags),
      description: cdktn.stringToTerraform(this._description),
      domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
      domain_unit_identifier: cdktn.stringToTerraform(this._domainUnitIdentifier),
      environment_configurations: cdktn.listMapper(datazoneProjectProfileEnvironmentConfigurationsToTerraform, false)(this._environmentConfigurations.internalValue),
      name: cdktn.stringToTerraform(this._name),
      project_resource_tags: cdktn.listMapper(datazoneProjectProfileProjectResourceTagsToTerraform, false)(this._projectResourceTags.internalValue),
      project_resource_tags_description: cdktn.stringToTerraform(this._projectResourceTagsDescription),
      status: cdktn.stringToTerraform(this._status),
      use_default_configurations: cdktn.booleanToTerraform(this._useDefaultConfigurations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_custom_project_resource_tags: {
        value: cdktn.booleanToHclTerraform(this._allowCustomProjectResourceTags),
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
      domain_identifier: {
        value: cdktn.stringToHclTerraform(this._domainIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_unit_identifier: {
        value: cdktn.stringToHclTerraform(this._domainUnitIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_configurations: {
        value: cdktn.listMapperHcl(datazoneProjectProfileEnvironmentConfigurationsToHclTerraform, false)(this._environmentConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneProjectProfileEnvironmentConfigurationsList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_resource_tags: {
        value: cdktn.listMapperHcl(datazoneProjectProfileProjectResourceTagsToHclTerraform, false)(this._projectResourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatazoneProjectProfileProjectResourceTagsList",
      },
      project_resource_tags_description: {
        value: cdktn.stringToHclTerraform(this._projectResourceTagsDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_configurations: {
        value: cdktn.booleanToHclTerraform(this._useDefaultConfigurations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
