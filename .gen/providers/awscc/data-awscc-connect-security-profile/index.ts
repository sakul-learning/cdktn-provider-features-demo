// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccConnectSecurityProfileConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_security_profile#id DataAwsccConnectSecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccConnectSecurityProfileAllowedAccessControlTags {
}

export function dataAwsccConnectSecurityProfileAllowedAccessControlTagsToTerraform(struct?: DataAwsccConnectSecurityProfileAllowedAccessControlTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileAllowedAccessControlTagsToHclTerraform(struct?: DataAwsccConnectSecurityProfileAllowedAccessControlTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectSecurityProfileAllowedAccessControlTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileAllowedAccessControlTags | undefined) {
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

export class DataAwsccConnectSecurityProfileAllowedAccessControlTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference {
    return new DataAwsccConnectSecurityProfileAllowedAccessControlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectSecurityProfileAllowedFlowModules {
}

export function dataAwsccConnectSecurityProfileAllowedFlowModulesToTerraform(struct?: DataAwsccConnectSecurityProfileAllowedFlowModules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileAllowedFlowModulesToHclTerraform(struct?: DataAwsccConnectSecurityProfileAllowedFlowModules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectSecurityProfileAllowedFlowModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileAllowedFlowModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_module_id - computed: true, optional: false, required: false
  public get flowModuleId() {
    return this.getStringAttribute('flow_module_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccConnectSecurityProfileAllowedFlowModulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference {
    return new DataAwsccConnectSecurityProfileAllowedFlowModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectSecurityProfileApplications {
}

export function dataAwsccConnectSecurityProfileApplicationsToTerraform(struct?: DataAwsccConnectSecurityProfileApplications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileApplicationsToHclTerraform(struct?: DataAwsccConnectSecurityProfileApplications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileApplicationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectSecurityProfileApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_permissions - computed: true, optional: false, required: false
  public get applicationPermissions() {
    return cdktn.Fn.tolist(this.getListAttribute('application_permissions'));
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccConnectSecurityProfileApplicationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectSecurityProfileApplicationsOutputReference {
    return new DataAwsccConnectSecurityProfileApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues {
}

export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesToTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesToHclTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference {
    return new DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration {
}

export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationToTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationToHclTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_attribute_values - computed: true, optional: false, required: false
  private _primaryAttributeValues = new DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationPrimaryAttributeValuesList(this, "primary_attribute_values", false);
  public get primaryAttributeValues() {
    return this._primaryAttributeValues;
  }
}
export interface DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration {
}

export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationToTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationToHclTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_attribute_access_control_configuration - computed: true, optional: false, required: false
  private _primaryAttributeAccessControlConfiguration = new DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationPrimaryAttributeAccessControlConfigurationOutputReference(this, "primary_attribute_access_control_configuration");
  public get primaryAttributeAccessControlConfiguration() {
    return this._primaryAttributeAccessControlConfiguration;
  }
}
export interface DataAwsccConnectSecurityProfileGranularAccessControlConfiguration {
}

export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationToTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileGranularAccessControlConfigurationToHclTerraform(struct?: DataAwsccConnectSecurityProfileGranularAccessControlConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccConnectSecurityProfileGranularAccessControlConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileGranularAccessControlConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_table_access_control_configuration - computed: true, optional: false, required: false
  private _dataTableAccessControlConfiguration = new DataAwsccConnectSecurityProfileGranularAccessControlConfigurationDataTableAccessControlConfigurationOutputReference(this, "data_table_access_control_configuration");
  public get dataTableAccessControlConfiguration() {
    return this._dataTableAccessControlConfiguration;
  }
}
export interface DataAwsccConnectSecurityProfileTags {
}

export function dataAwsccConnectSecurityProfileTagsToTerraform(struct?: DataAwsccConnectSecurityProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccConnectSecurityProfileTagsToHclTerraform(struct?: DataAwsccConnectSecurityProfileTags): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccConnectSecurityProfileTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccConnectSecurityProfileTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccConnectSecurityProfileTags | undefined) {
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

export class DataAwsccConnectSecurityProfileTagsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccConnectSecurityProfileTagsOutputReference {
    return new DataAwsccConnectSecurityProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_security_profile awscc_connect_security_profile}
*/
export class DataAwsccConnectSecurityProfile extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_connect_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccConnectSecurityProfile resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccConnectSecurityProfile to import
  * @param importFromId The id of the existing DataAwsccConnectSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccConnectSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/connect_security_profile awscc_connect_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccConnectSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccConnectSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_connect_security_profile',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_access_control_hierarchy_group_id - computed: true, optional: false, required: false
  public get allowedAccessControlHierarchyGroupId() {
    return this.getStringAttribute('allowed_access_control_hierarchy_group_id');
  }

  // allowed_access_control_tags - computed: true, optional: false, required: false
  private _allowedAccessControlTags = new DataAwsccConnectSecurityProfileAllowedAccessControlTagsList(this, "allowed_access_control_tags", true);
  public get allowedAccessControlTags() {
    return this._allowedAccessControlTags;
  }

  // allowed_flow_modules - computed: true, optional: false, required: false
  private _allowedFlowModules = new DataAwsccConnectSecurityProfileAllowedFlowModulesList(this, "allowed_flow_modules", true);
  public get allowedFlowModules() {
    return this._allowedFlowModules;
  }

  // applications - computed: true, optional: false, required: false
  private _applications = new DataAwsccConnectSecurityProfileApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // granular_access_control_configuration - computed: true, optional: false, required: false
  private _granularAccessControlConfiguration = new DataAwsccConnectSecurityProfileGranularAccessControlConfigurationOutputReference(this, "granular_access_control_configuration");
  public get granularAccessControlConfiguration() {
    return this._granularAccessControlConfiguration;
  }

  // hierarchy_restricted_resources - computed: true, optional: false, required: false
  public get hierarchyRestrictedResources() {
    return cdktn.Fn.tolist(this.getListAttribute('hierarchy_restricted_resources'));
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

  // instance_arn - computed: true, optional: false, required: false
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }

  // last_modified_region - computed: true, optional: false, required: false
  public get lastModifiedRegion() {
    return this.getStringAttribute('last_modified_region');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return cdktn.Fn.tolist(this.getListAttribute('permissions'));
  }

  // security_profile_arn - computed: true, optional: false, required: false
  public get securityProfileArn() {
    return this.getStringAttribute('security_profile_arn');
  }

  // security_profile_name - computed: true, optional: false, required: false
  public get securityProfileName() {
    return this.getStringAttribute('security_profile_name');
  }

  // tag_restricted_resources - computed: true, optional: false, required: false
  public get tagRestrictedResources() {
    return cdktn.Fn.tolist(this.getListAttribute('tag_restricted_resources'));
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataAwsccConnectSecurityProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
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
