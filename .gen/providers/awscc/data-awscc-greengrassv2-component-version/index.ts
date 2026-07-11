// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_component_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccGreengrassv2ComponentVersionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_component_version#id DataAwsccGreengrassv2ComponentVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dependency_type - computed: true, optional: false, required: false
  public get dependencyType() {
    return this.getStringAttribute('dependency_type');
  }

  // version_requirement - computed: true, optional: false, required: false
  public get versionRequirement() {
    return this.getStringAttribute('version_requirement');
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap extends cdktn.ComplexMap {

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
  public get(key: string): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference {
    return new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference {
    return new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_group_owner - computed: true, optional: false, required: false
  public get addGroupOwner() {
    return this.getBooleanAttribute('add_group_owner');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference {
    return new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_group_owner - computed: true, optional: false, required: false
  public get addGroupOwner() {
    return this.getBooleanAttribute('add_group_owner');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference {
    return new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // memory_size_in_kb - computed: true, optional: false, required: false
  public get memorySizeInKb() {
    return this.getNumberAttribute('memory_size_in_kb');
  }

  // mount_ro_sysfs - computed: true, optional: false, required: false
  public get mountRoSysfs() {
    return this.getBooleanAttribute('mount_ro_sysfs');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_params - computed: true, optional: false, required: false
  private _containerParams = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsOutputReference(this, "container_params");
  public get containerParams() {
    return this._containerParams;
  }

  // isolation_mode - computed: true, optional: false, required: false
  public get isolationMode() {
    return this.getStringAttribute('isolation_mode');
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new cdktn.StringMap(this, "environment_variables");
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // event_sources - computed: true, optional: false, required: false
  private _eventSources = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesList(this, "event_sources", false);
  public get eventSources() {
    return this._eventSources;
  }

  // exec_args - computed: true, optional: false, required: false
  public get execArgs() {
    return this.getListAttribute('exec_args');
  }

  // input_payload_encoding_type - computed: true, optional: false, required: false
  public get inputPayloadEncodingType() {
    return this.getStringAttribute('input_payload_encoding_type');
  }

  // linux_process_params - computed: true, optional: false, required: false
  private _linuxProcessParams = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsOutputReference(this, "linux_process_params");
  public get linuxProcessParams() {
    return this._linuxProcessParams;
  }

  // max_idle_time_in_seconds - computed: true, optional: false, required: false
  public get maxIdleTimeInSeconds() {
    return this.getNumberAttribute('max_idle_time_in_seconds');
  }

  // max_instances_count - computed: true, optional: false, required: false
  public get maxInstancesCount() {
    return this.getNumberAttribute('max_instances_count');
  }

  // max_queue_size - computed: true, optional: false, required: false
  public get maxQueueSize() {
    return this.getNumberAttribute('max_queue_size');
  }

  // pinned - computed: true, optional: false, required: false
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }

  // status_timeout_in_seconds - computed: true, optional: false, required: false
  public get statusTimeoutInSeconds() {
    return this.getNumberAttribute('status_timeout_in_seconds');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktn.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference {
    return new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccGreengrassv2ComponentVersionLambdaFunction {
}

export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccGreengrassv2ComponentVersionLambdaFunctionToHclTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccGreengrassv2ComponentVersionLambdaFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccGreengrassv2ComponentVersionLambdaFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_dependencies - computed: true, optional: false, required: false
  private _componentDependencies = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesMap(this, "component_dependencies");
  public get componentDependencies() {
    return this._componentDependencies;
  }

  // component_lambda_parameters - computed: true, optional: false, required: false
  private _componentLambdaParameters = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersOutputReference(this, "component_lambda_parameters");
  public get componentLambdaParameters() {
    return this._componentLambdaParameters;
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_platforms - computed: true, optional: false, required: false
  private _componentPlatforms = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsList(this, "component_platforms", false);
  public get componentPlatforms() {
    return this._componentPlatforms;
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
  }

  // lambda_arn - computed: true, optional: false, required: false
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_component_version awscc_greengrassv2_component_version}
*/
export class DataAwsccGreengrassv2ComponentVersion extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_greengrassv2_component_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccGreengrassv2ComponentVersion resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccGreengrassv2ComponentVersion to import
  * @param importFromId The id of the existing DataAwsccGreengrassv2ComponentVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_component_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccGreengrassv2ComponentVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_greengrassv2_component_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/data-sources/greengrassv2_component_version awscc_greengrassv2_component_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccGreengrassv2ComponentVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccGreengrassv2ComponentVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_greengrassv2_component_version',
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

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
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

  // inline_recipe - computed: true, optional: false, required: false
  public get inlineRecipe() {
    return this.getStringAttribute('inline_recipe');
  }

  // lambda_function - computed: true, optional: false, required: false
  private _lambdaFunction = new DataAwsccGreengrassv2ComponentVersionLambdaFunctionOutputReference(this, "lambda_function");
  public get lambdaFunction() {
    return this._lambdaFunction;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
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
