// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccDatazoneProjectProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_profile#id DataAwsccDatazoneProjectProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount {
}

export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountToTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountToHclTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
}
export interface DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion {
}

export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionToTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionToHclTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export interface DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides {
}

export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesToTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesToHclTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference {
    return new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters {
}

export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersToTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersToHclTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference {
    return new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters {
}

export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersToTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersToHclTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_overrides - computed: true, optional: false, required: false
  private _parameterOverrides = new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(this, "parameter_overrides", false);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }

  // resolved_parameters - computed: true, optional: false, required: false
  private _resolvedParameters = new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(this, "resolved_parameters", false);
  public get resolvedParameters() {
    return this._resolvedParameters;
  }

  // ssm_path - computed: true, optional: false, required: false
  public get ssmPath() {
    return this.getStringAttribute('ssm_path');
  }
}
export interface DataAwsccDatazoneProjectProfileEnvironmentConfigurations {
}

export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsToTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileEnvironmentConfigurationsToHclTerraform(struct?: DataAwsccDatazoneProjectProfileEnvironmentConfigurations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneProjectProfileEnvironmentConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileEnvironmentConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_account - computed: true, optional: false, required: false
  private _awsAccount = new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(this, "aws_account");
  public get awsAccount() {
    return this._awsAccount;
  }

  // aws_region - computed: true, optional: false, required: false
  private _awsRegion = new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(this, "aws_region");
  public get awsRegion() {
    return this._awsRegion;
  }

  // configuration_parameters - computed: true, optional: false, required: false
  private _configurationParameters = new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(this, "configuration_parameters");
  public get configurationParameters() {
    return this._configurationParameters;
  }

  // deployment_mode - computed: true, optional: false, required: false
  public get deploymentMode() {
    return this.getStringAttribute('deployment_mode');
  }

  // deployment_order - computed: true, optional: false, required: false
  public get deploymentOrder() {
    return this.getNumberAttribute('deployment_order');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_blueprint_id - computed: true, optional: false, required: false
  public get environmentBlueprintId() {
    return this.getStringAttribute('environment_blueprint_id');
  }

  // environment_configuration_id - computed: true, optional: false, required: false
  public get environmentConfigurationId() {
    return this.getStringAttribute('environment_configuration_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference {
    return new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccDatazoneProjectProfileProjectResourceTags {
}

export function dataAwsccDatazoneProjectProfileProjectResourceTagsToTerraform(struct?: DataAwsccDatazoneProjectProfileProjectResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccDatazoneProjectProfileProjectResourceTagsToHclTerraform(struct?: DataAwsccDatazoneProjectProfileProjectResourceTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccDatazoneProjectProfileProjectResourceTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccDatazoneProjectProfileProjectResourceTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_value_editable - computed: true, optional: false, required: false
  public get isValueEditable() {
    return this.getBooleanAttribute('is_value_editable');
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

export class DataAwsccDatazoneProjectProfileProjectResourceTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference {
    return new DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_profile awscc_datazone_project_profile}
*/
export class DataAwsccDatazoneProjectProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_datazone_project_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccDatazoneProjectProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccDatazoneProjectProfile to import
  * @param importFromId The id of the existing DataAwsccDatazoneProjectProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccDatazoneProjectProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_project_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/datazone_project_profile awscc_datazone_project_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDatazoneProjectProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDatazoneProjectProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_datazone_project_profile',
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

  // allow_custom_project_resource_tags - computed: true, optional: false, required: false
  public get allowCustomProjectResourceTags() {
    return this.getBooleanAttribute('allow_custom_project_resource_tags');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_identifier - computed: true, optional: false, required: false
  public get domainIdentifier() {
    return this.getStringAttribute('domain_identifier');
  }

  // domain_unit_id - computed: true, optional: false, required: false
  public get domainUnitId() {
    return this.getStringAttribute('domain_unit_id');
  }

  // domain_unit_identifier - computed: true, optional: false, required: false
  public get domainUnitIdentifier() {
    return this.getStringAttribute('domain_unit_identifier');
  }

  // environment_configurations - computed: true, optional: false, required: false
  private _environmentConfigurations = new DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList(this, "environment_configurations", false);
  public get environmentConfigurations() {
    return this._environmentConfigurations;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // last_updated_at - computed: true, optional: false, required: false
  public get lastUpdatedAt() {
    return this.getStringAttribute('last_updated_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_profile_id - computed: true, optional: false, required: false
  public get projectProfileId() {
    return this.getStringAttribute('project_profile_id');
  }

  // project_resource_tags - computed: true, optional: false, required: false
  private _projectResourceTags = new DataAwsccDatazoneProjectProfileProjectResourceTagsList(this, "project_resource_tags", false);
  public get projectResourceTags() {
    return this._projectResourceTags;
  }

  // project_resource_tags_description - computed: true, optional: false, required: false
  public get projectResourceTagsDescription() {
    return this.getStringAttribute('project_resource_tags_description');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // use_default_configurations - computed: true, optional: false, required: false
  public get useDefaultConfigurations() {
    return this.getBooleanAttribute('use_default_configurations');
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
