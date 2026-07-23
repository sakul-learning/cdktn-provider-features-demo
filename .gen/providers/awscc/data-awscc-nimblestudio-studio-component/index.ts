// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_studio_component
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccNimblestudioStudioComponentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_studio_component#id DataAwsccNimblestudioStudioComponent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes {
}

export function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference {
    return new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration {
}

export function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // computer_attributes - computed: true, optional: false, required: false
  private _computerAttributes = new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(this, "computer_attributes", false);
  public get computerAttributes() {
    return this._computerAttributes;
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }

  // organizational_unit_distinguished_name - computed: true, optional: false, required: false
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
}
export interface DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration {
}

export function dataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_user - computed: true, optional: false, required: false
  public get activeDirectoryUser() {
    return this.getStringAttribute('active_directory_user');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}
export interface DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration {
}

export function dataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}
export interface DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration {
}

export function dataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // linux_mount_point - computed: true, optional: false, required: false
  public get linuxMountPoint() {
    return this.getStringAttribute('linux_mount_point');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }

  // windows_mount_drive - computed: true, optional: false, required: false
  public get windowsMountDrive() {
    return this.getStringAttribute('windows_mount_drive');
  }
}
export interface DataAwsccNimblestudioStudioComponentConfiguration {
}

export function dataAwsccNimblestudioStudioComponentConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioComponentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentConfigurationToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccNimblestudioStudioComponentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_directory_configuration - computed: true, optional: false, required: false
  private _activeDirectoryConfiguration = new DataAwsccNimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(this, "active_directory_configuration");
  public get activeDirectoryConfiguration() {
    return this._activeDirectoryConfiguration;
  }

  // compute_farm_configuration - computed: true, optional: false, required: false
  private _computeFarmConfiguration = new DataAwsccNimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(this, "compute_farm_configuration");
  public get computeFarmConfiguration() {
    return this._computeFarmConfiguration;
  }

  // license_service_configuration - computed: true, optional: false, required: false
  private _licenseServiceConfiguration = new DataAwsccNimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(this, "license_service_configuration");
  public get licenseServiceConfiguration() {
    return this._licenseServiceConfiguration;
  }

  // shared_file_system_configuration - computed: true, optional: false, required: false
  private _sharedFileSystemConfiguration = new DataAwsccNimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(this, "shared_file_system_configuration");
  public get sharedFileSystemConfiguration() {
    return this._sharedFileSystemConfiguration;
  }
}
export interface DataAwsccNimblestudioStudioComponentInitializationScripts {
}

export function dataAwsccNimblestudioStudioComponentInitializationScriptsToTerraform(struct?: DataAwsccNimblestudioStudioComponentInitializationScripts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentInitializationScriptsToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentInitializationScripts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNimblestudioStudioComponentInitializationScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentInitializationScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // launch_profile_protocol_version - computed: true, optional: false, required: false
  public get launchProfileProtocolVersion() {
    return this.getStringAttribute('launch_profile_protocol_version');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // run_context - computed: true, optional: false, required: false
  public get runContext() {
    return this.getStringAttribute('run_context');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }
}

export class DataAwsccNimblestudioStudioComponentInitializationScriptsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference {
    return new DataAwsccNimblestudioStudioComponentInitializationScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccNimblestudioStudioComponentScriptParameters {
}

export function dataAwsccNimblestudioStudioComponentScriptParametersToTerraform(struct?: DataAwsccNimblestudioStudioComponentScriptParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccNimblestudioStudioComponentScriptParametersToHclTerraform(struct?: DataAwsccNimblestudioStudioComponentScriptParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccNimblestudioStudioComponentScriptParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccNimblestudioStudioComponentScriptParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccNimblestudioStudioComponentScriptParameters | undefined) {
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

export class DataAwsccNimblestudioStudioComponentScriptParametersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccNimblestudioStudioComponentScriptParametersOutputReference {
    return new DataAwsccNimblestudioStudioComponentScriptParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_studio_component awscc_nimblestudio_studio_component}
*/
export class DataAwsccNimblestudioStudioComponent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_nimblestudio_studio_component";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccNimblestudioStudioComponent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccNimblestudioStudioComponent to import
  * @param importFromId The id of the existing DataAwsccNimblestudioStudioComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccNimblestudioStudioComponent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_nimblestudio_studio_component", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/data-sources/nimblestudio_studio_component awscc_nimblestudio_studio_component} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioStudioComponentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStudioComponentConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_studio_component',
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

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataAwsccNimblestudioStudioComponentConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ec_2_security_group_ids - computed: true, optional: false, required: false
  public get ec2SecurityGroupIds() {
    return this.getListAttribute('ec_2_security_group_ids');
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

  // initialization_scripts - computed: true, optional: false, required: false
  private _initializationScripts = new DataAwsccNimblestudioStudioComponentInitializationScriptsList(this, "initialization_scripts", false);
  public get initializationScripts() {
    return this._initializationScripts;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // script_parameters - computed: true, optional: false, required: false
  private _scriptParameters = new DataAwsccNimblestudioStudioComponentScriptParametersList(this, "script_parameters", false);
  public get scriptParameters() {
    return this._scriptParameters;
  }

  // studio_component_id - computed: true, optional: false, required: false
  public get studioComponentId() {
    return this.getStringAttribute('studio_component_id');
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
