// https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAwsccBatchJobDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_job_definition#id DataAwsccBatchJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStruct {
}

export function dataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructToTerraform(struct?: DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructToHclTerraform(struct?: DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumable_resource - computed: true, optional: false, required: false
  public get consumableResource() {
    return this.getStringAttribute('consumable_resource');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
}

export class DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructOutputReference {
    return new DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionConsumableResourceProperties {
}

export function dataAwsccBatchJobDefinitionConsumableResourcePropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionConsumableResourceProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionConsumableResourcePropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionConsumableResourceProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionConsumableResourcePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionConsumableResourceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionConsumableResourceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumable_resource_list - computed: true, optional: false, required: false
  private _consumableResourceList = new DataAwsccBatchJobDefinitionConsumableResourcePropertiesConsumableResourceListStructList(this, "consumable_resource_list", false);
  public get consumableResourceList() {
    return this._consumableResourceList;
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesEnvironment {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesEnvironmentToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesEnvironmentToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesEnvironment | undefined) {
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

export class DataAwsccBatchJobDefinitionContainerPropertiesEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesEnvironmentOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorage {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorageToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorageToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfiguration {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevices {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfs {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesLinuxParameters {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesLinuxParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesLinuxParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // max_swap - computed: true, optional: false, required: false
  public get maxSwap() {
    return this.getNumberAttribute('max_swap');
  }

  // shared_memory_size - computed: true, optional: false, required: false
  public get sharedMemorySize() {
    return this.getNumberAttribute('shared_memory_size');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }

  // tmpfs - computed: true, optional: false, required: false
  private _tmpfs = new DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptions {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptions | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesLogConfiguration {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesMountPoints {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesMountPointsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesMountPointsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesMountPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesMountPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesMountPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesMountPointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesMountPointsOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfiguration {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesNetworkConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesNetworkConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentials {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentialsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentialsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirements {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatform {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatformToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatformToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_architecture - computed: true, optional: false, required: false
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }

  // operating_system_family - computed: true, optional: false, required: false
  public get operatingSystemFamily() {
    return this.getStringAttribute('operating_system_family');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesSecrets {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesSecretsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesSecretsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesSecrets | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesSecretsOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesUlimits {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesUlimitsToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesUlimitsToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesUlimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesUlimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesUlimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesUlimitsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesUlimitsOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // iam - computed: true, optional: false, required: false
  public get iam() {
    return this.getStringAttribute('iam');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption - computed: true, optional: false, required: false
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesVolumesHost {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesHostToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesHostToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesVolumesHostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesVolumesHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesVolumesHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionContainerPropertiesVolumes {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesToTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesVolumesToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionContainerPropertiesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerPropertiesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_volume_configuration - computed: true, optional: false, required: false
  private _efsVolumeConfiguration = new DataAwsccBatchJobDefinitionContainerPropertiesVolumesEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAwsccBatchJobDefinitionContainerPropertiesVolumesHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // s3_files_volume_configuration - computed: true, optional: false, required: false
  private _s3FilesVolumeConfiguration = new DataAwsccBatchJobDefinitionContainerPropertiesVolumesS3FilesVolumeConfigurationOutputReference(this, "s3_files_volume_configuration");
  public get s3FilesVolumeConfiguration() {
    return this._s3FilesVolumeConfiguration;
  }
}

export class DataAwsccBatchJobDefinitionContainerPropertiesVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionContainerPropertiesVolumesOutputReference {
    return new DataAwsccBatchJobDefinitionContainerPropertiesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionContainerProperties {
}

export function dataAwsccBatchJobDefinitionContainerPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionContainerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionContainerPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionContainerProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionContainerPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionContainerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionContainerProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccBatchJobDefinitionContainerPropertiesEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  private _ephemeralStorage = new DataAwsccBatchJobDefinitionContainerPropertiesEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // fargate_platform_configuration - computed: true, optional: false, required: false
  private _fargatePlatformConfiguration = new DataAwsccBatchJobDefinitionContainerPropertiesFargatePlatformConfigurationOutputReference(this, "fargate_platform_configuration");
  public get fargatePlatformConfiguration() {
    return this._fargatePlatformConfiguration;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // job_role_arn - computed: true, optional: false, required: false
  public get jobRoleArn() {
    return this.getStringAttribute('job_role_arn');
  }

  // linux_parameters - computed: true, optional: false, required: false
  private _linuxParameters = new DataAwsccBatchJobDefinitionContainerPropertiesLinuxParametersOutputReference(this, "linux_parameters");
  public get linuxParameters() {
    return this._linuxParameters;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccBatchJobDefinitionContainerPropertiesLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // mount_points - computed: true, optional: false, required: false
  private _mountPoints = new DataAwsccBatchJobDefinitionContainerPropertiesMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccBatchJobDefinitionContainerPropertiesNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccBatchJobDefinitionContainerPropertiesRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsccBatchJobDefinitionContainerPropertiesResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }

  // runtime_platform - computed: true, optional: false, required: false
  private _runtimePlatform = new DataAwsccBatchJobDefinitionContainerPropertiesRuntimePlatformOutputReference(this, "runtime_platform");
  public get runtimePlatform() {
    return this._runtimePlatform;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccBatchJobDefinitionContainerPropertiesSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // ulimits - computed: true, optional: false, required: false
  private _ulimits = new DataAwsccBatchJobDefinitionContainerPropertiesUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBatchJobDefinitionContainerPropertiesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOn {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironment {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironment | undefined) {
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

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfiguration {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevices {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParameters {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // max_swap - computed: true, optional: false, required: false
  public get maxSwap() {
    return this.getNumberAttribute('max_swap');
  }

  // shared_memory_size - computed: true, optional: false, required: false
  public get sharedMemorySize() {
    return this.getNumberAttribute('shared_memory_size');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }

  // tmpfs - computed: true, optional: false, required: false
  private _tmpfs = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfiguration {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPoints {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentials {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentialsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentialsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirements {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecrets {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecrets | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimits {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainers {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // depends_on - computed: true, optional: false, required: false
  private _dependsOn = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
  }

  // firelens_configuration - computed: true, optional: false, required: false
  private _firelensConfiguration = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersFirelensConfigurationOutputReference(this, "firelens_configuration");
  public get firelensConfiguration() {
    return this._firelensConfiguration;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // linux_parameters - computed: true, optional: false, required: false
  private _linuxParameters = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLinuxParametersOutputReference(this, "linux_parameters");
  public get linuxParameters() {
    return this._linuxParameters;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // mount_points - computed: true, optional: false, required: false
  private _mountPoints = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // start_timeout - computed: true, optional: false, required: false
  public get startTimeout() {
    return this.getNumberAttribute('start_timeout');
  }

  // stop_timeout - computed: true, optional: false, required: false
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }

  // ulimits - computed: true, optional: false, required: false
  private _ulimits = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorage {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorageToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorageToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfiguration {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getStringAttribute('assign_public_ip');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatform {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatformToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatformToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_architecture - computed: true, optional: false, required: false
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }

  // operating_system_family - computed: true, optional: false, required: false
  public get operatingSystemFamily() {
    return this.getStringAttribute('operating_system_family');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // iam - computed: true, optional: false, required: false
  public get iam() {
    return this.getStringAttribute('iam');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption - computed: true, optional: false, required: false
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHost {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHostToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHostToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumes {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_volume_configuration - computed: true, optional: false, required: false
  private _efsVolumeConfiguration = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // s3_files_volume_configuration - computed: true, optional: false, required: false
  private _s3FilesVolumeConfiguration = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationOutputReference(this, "s3_files_volume_configuration");
  public get s3FilesVolumeConfiguration() {
    return this._s3FilesVolumeConfiguration;
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsPropertiesTaskProperties {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsPropertiesTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEcsPropertiesTaskProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsPropertiesTaskProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  private _ephemeralStorage = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // ipc_mode - computed: true, optional: false, required: false
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // pid_mode - computed: true, optional: false, required: false
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // runtime_platform - computed: true, optional: false, required: false
  private _runtimePlatform = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesRuntimePlatformOutputReference(this, "runtime_platform");
  public get runtimePlatform() {
    return this._runtimePlatform;
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesOutputReference {
    return new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEcsProperties {
}

export function dataAwsccBatchJobDefinitionEcsPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionEcsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEcsPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEcsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEcsPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEcsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEcsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_properties - computed: true, optional: false, required: false
  private _taskProperties = new DataAwsccBatchJobDefinitionEcsPropertiesTaskPropertiesList(this, "task_properties", false);
  public get taskProperties() {
    return this._taskProperties;
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | undefined) {
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

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResources {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktn.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktn.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainers {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets | undefined) {
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
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | undefined) {
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

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktn.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktn.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainers {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadata {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadataToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadataToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktn.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaim {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaimToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaimToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumes {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // empty_dir - computed: true, optional: false, required: false
  private _emptyDir = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }

  // host_path - computed: true, optional: false, required: false
  private _hostPath = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  private _persistentVolumeClaim = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference {
    return new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionEksPropertiesPodProperties {
}

export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesPodPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksPropertiesPodProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksPropertiesPodProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksPropertiesPodProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  private _imagePullSecrets = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }

  // init_containers - computed: true, optional: false, required: false
  private _initContainers = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}
export interface DataAwsccBatchJobDefinitionEksProperties {
}

export function dataAwsccBatchJobDefinitionEksPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionEksProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionEksPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionEksProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionEksPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionEksProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionEksProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_properties - computed: true, optional: false, required: false
  private _podProperties = new DataAwsccBatchJobDefinitionEksPropertiesPodPropertiesOutputReference(this, "pod_properties");
  public get podProperties() {
    return this._podProperties;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStruct {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumable_resource - computed: true, optional: false, required: false
  public get consumableResource() {
    return this.getStringAttribute('consumable_resource');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumable_resource_list - computed: true, optional: false, required: false
  private _consumableResourceList = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesConsumableResourceListStructList(this, "consumable_resource_list", false);
  public get consumableResourceList() {
    return this._consumableResourceList;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment | undefined) {
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

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_in_gi_b - computed: true, optional: false, required: false
  public get sizeInGiB() {
    return this.getNumberAttribute('size_in_gi_b');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // max_swap - computed: true, optional: false, required: false
  public get maxSwap() {
    return this.getNumberAttribute('max_swap');
  }

  // shared_memory_size - computed: true, optional: false, required: false
  public get sharedMemorySize() {
    return this.getNumberAttribute('shared_memory_size');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }

  // tmpfs - computed: true, optional: false, required: false
  private _tmpfs = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentials {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentialsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentialsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_architecture - computed: true, optional: false, required: false
  public get cpuArchitecture() {
    return this.getStringAttribute('cpu_architecture');
  }

  // operating_system_family - computed: true, optional: false, required: false
  public get operatingSystemFamily() {
    return this.getStringAttribute('operating_system_family');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // iam - computed: true, optional: false, required: false
  public get iam() {
    return this.getStringAttribute('iam');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption - computed: true, optional: false, required: false
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_volume_configuration - computed: true, optional: false, required: false
  private _efsVolumeConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // s3_files_volume_configuration - computed: true, optional: false, required: false
  private _s3FilesVolumeConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesS3FilesVolumeConfigurationOutputReference(this, "s3_files_volume_configuration");
  public get s3FilesVolumeConfiguration() {
    return this._s3FilesVolumeConfiguration;
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  private _ephemeralStorage = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // job_role_arn - computed: true, optional: false, required: false
  public get jobRoleArn() {
    return this.getStringAttribute('job_role_arn');
  }

  // linux_parameters - computed: true, optional: false, required: false
  private _linuxParameters = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference(this, "linux_parameters");
  public get linuxParameters() {
    return this._linuxParameters;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // mount_points - computed: true, optional: false, required: false
  private _mountPoints = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }

  // runtime_platform - computed: true, optional: false, required: false
  private _runtimePlatform = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference(this, "runtime_platform");
  public get runtimePlatform() {
    return this._runtimePlatform;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // ulimits - computed: true, optional: false, required: false
  private _ulimits = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOn {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOn): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironment {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironment): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironment | undefined) {
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

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevices {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevices): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.getStringAttribute('host_path');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // mount_options - computed: true, optional: false, required: false
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParameters {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // init_process_enabled - computed: true, optional: false, required: false
  public get initProcessEnabled() {
    return this.getBooleanAttribute('init_process_enabled');
  }

  // max_swap - computed: true, optional: false, required: false
  public get maxSwap() {
    return this.getNumberAttribute('max_swap');
  }

  // shared_memory_size - computed: true, optional: false, required: false
  public get sharedMemorySize() {
    return this.getNumberAttribute('shared_memory_size');
  }

  // swappiness - computed: true, optional: false, required: false
  public get swappiness() {
    return this.getNumberAttribute('swappiness');
  }

  // tmpfs - computed: true, optional: false, required: false
  private _tmpfs = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersTmpfsList(this, "tmpfs", false);
  public get tmpfs() {
    return this._tmpfs;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptions | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_driver - computed: true, optional: false, required: false
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }

  // options - computed: true, optional: false, required: false
  private _options = new cdktn.StringMap(this, "options");
  public get options() {
    return this._options;
  }

  // secret_options - computed: true, optional: false, required: false
  private _secretOptions = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationSecretOptionsList(this, "secret_options", false);
  public get secretOptions() {
    return this._secretOptions;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPoints {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // container_path - computed: true, optional: false, required: false
  public get containerPath() {
    return this.getStringAttribute('container_path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_volume - computed: true, optional: false, required: false
  public get sourceVolume() {
    return this.getStringAttribute('source_volume');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentials {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentialsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentialsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentials): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentialsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials_parameter - computed: true, optional: false, required: false
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirements {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirements): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecrets {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecrets | undefined) {
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

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimits {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimits): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hard_limit - computed: true, optional: false, required: false
  public get hardLimit() {
    return this.getNumberAttribute('hard_limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // soft_limit - computed: true, optional: false, required: false
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainers {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // depends_on - computed: true, optional: false, required: false
  private _dependsOn = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersDependsOnList(this, "depends_on", false);
  public get dependsOn() {
    return this._dependsOn;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // essential - computed: true, optional: false, required: false
  public get essential() {
    return this.getBooleanAttribute('essential');
  }

  // firelens_configuration - computed: true, optional: false, required: false
  private _firelensConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersFirelensConfigurationOutputReference(this, "firelens_configuration");
  public get firelensConfiguration() {
    return this._firelensConfiguration;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // linux_parameters - computed: true, optional: false, required: false
  private _linuxParameters = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLinuxParametersOutputReference(this, "linux_parameters");
  public get linuxParameters() {
    return this._linuxParameters;
  }

  // log_configuration - computed: true, optional: false, required: false
  private _logConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }

  // mount_points - computed: true, optional: false, required: false
  private _mountPoints = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // readonly_root_filesystem - computed: true, optional: false, required: false
  public get readonlyRootFilesystem() {
    return this.getBooleanAttribute('readonly_root_filesystem');
  }

  // repository_credentials - computed: true, optional: false, required: false
  private _repositoryCredentials = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersRepositoryCredentialsOutputReference(this, "repository_credentials");
  public get repositoryCredentials() {
    return this._repositoryCredentials;
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersResourceRequirementsList(this, "resource_requirements", false);
  public get resourceRequirements() {
    return this._resourceRequirements;
  }

  // secrets - computed: true, optional: false, required: false
  private _secrets = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }

  // start_timeout - computed: true, optional: false, required: false
  public get startTimeout() {
    return this.getNumberAttribute('start_timeout');
  }

  // stop_timeout - computed: true, optional: false, required: false
  public get stopTimeout() {
    return this.getNumberAttribute('stop_timeout');
  }

  // ulimits - computed: true, optional: false, required: false
  private _ulimits = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersUlimitsList(this, "ulimits", false);
  public get ulimits() {
    return this._ulimits;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // iam - computed: true, optional: false, required: false
  public get iam() {
    return this.getStringAttribute('iam');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization_config - computed: true, optional: false, required: false
  private _authorizationConfig = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }

  // file_system_id - computed: true, optional: false, required: false
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption - computed: true, optional: false, required: false
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHost {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHostToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHostToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHost): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_path - computed: true, optional: false, required: false
  public get sourcePath() {
    return this.getStringAttribute('source_path');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_arn - computed: true, optional: false, required: false
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }

  // file_system_arn - computed: true, optional: false, required: false
  public get fileSystemArn() {
    return this.getStringAttribute('file_system_arn');
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // transit_encryption_port - computed: true, optional: false, required: false
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumes {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // efs_volume_configuration - computed: true, optional: false, required: false
  private _efsVolumeConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesEfsVolumeConfigurationOutputReference(this, "efs_volume_configuration");
  public get efsVolumeConfiguration() {
    return this._efsVolumeConfiguration;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // s3_files_volume_configuration - computed: true, optional: false, required: false
  private _s3FilesVolumeConfiguration = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesS3FilesVolumeConfigurationOutputReference(this, "s3_files_volume_configuration");
  public get s3FilesVolumeConfiguration() {
    return this._s3FilesVolumeConfiguration;
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // enable_execute_command - computed: true, optional: false, required: false
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }

  // ipc_mode - computed: true, optional: false, required: false
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }

  // pid_mode - computed: true, optional: false, required: false
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }

  // task_role_arn - computed: true, optional: false, required: false
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_properties - computed: true, optional: false, required: false
  private _taskProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesTaskPropertiesList(this, "task_properties", false);
  public get taskProperties() {
    return this._taskProperties;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnv {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnv | undefined) {
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

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResources {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResourcesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResourcesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktn.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktn.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContext {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContextToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContextToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMounts {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainers {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecrets {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecrets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecrets | undefined) {
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
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnv {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnv): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnv | undefined) {
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

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResources {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResourcesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResourcesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new cdktn.StringMap(this, "limits");
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new cdktn.StringMap(this, "requests");
  public get requests() {
    return this._requests;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContext {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContextToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContextToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContext): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMounts {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMounts): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainers {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }

  // security_context - computed: true, optional: false, required: false
  private _securityContext = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }

  // volume_mounts - computed: true, optional: false, required: false
  private _volumeMounts = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadata {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadataToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadataToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktn.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktn.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDir {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDirToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDir): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDirToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDir): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDirOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPath {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPathToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPathToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaim {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaimToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaimToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaim): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaimOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecret {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecretToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecretToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecret): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecretOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumes {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // empty_dir - computed: true, optional: false, required: false
  private _emptyDir = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }

  // host_path - computed: true, optional: false, required: false
  private _hostPath = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  private _persistentVolumeClaim = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }

  // secret - computed: true, optional: false, required: false
  private _secret = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // containers - computed: true, optional: false, required: false
  private _containers = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  private _imagePullSecrets = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }

  // init_containers - computed: true, optional: false, required: false
  private _initContainers = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pod_properties - computed: true, optional: false, required: false
  private _podProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesPodPropertiesOutputReference(this, "pod_properties");
  public get podProperties() {
    return this._podProperties;
  }
}
export interface DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumable_resource_properties - computed: true, optional: false, required: false
  private _consumableResourceProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesConsumableResourcePropertiesOutputReference(this, "consumable_resource_properties");
  public get consumableResourceProperties() {
    return this._consumableResourceProperties;
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }

  // ecs_properties - computed: true, optional: false, required: false
  private _ecsProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEcsPropertiesOutputReference(this, "ecs_properties");
  public get ecsProperties() {
    return this._ecsProperties;
  }

  // eks_properties - computed: true, optional: false, required: false
  private _eksProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesEksPropertiesOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }

  // target_nodes - computed: true, optional: false, required: false
  public get targetNodes() {
    return this.getStringAttribute('target_nodes');
  }
}

export class DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference {
    return new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionNodeProperties {
}

export function dataAwsccBatchJobDefinitionNodePropertiesToTerraform(struct?: DataAwsccBatchJobDefinitionNodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionNodePropertiesToHclTerraform(struct?: DataAwsccBatchJobDefinitionNodeProperties): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionNodePropertiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionNodeProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionNodeProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // main_node - computed: true, optional: false, required: false
  public get mainNode() {
    return this.getNumberAttribute('main_node');
  }

  // node_range_properties - computed: true, optional: false, required: false
  private _nodeRangeProperties = new DataAwsccBatchJobDefinitionNodePropertiesNodeRangePropertiesList(this, "node_range_properties", false);
  public get nodeRangeProperties() {
    return this._nodeRangeProperties;
  }

  // num_nodes - computed: true, optional: false, required: false
  public get numNodes() {
    return this.getNumberAttribute('num_nodes');
  }
}
export interface DataAwsccBatchJobDefinitionResourceRetentionPolicy {
}

export function dataAwsccBatchJobDefinitionResourceRetentionPolicyToTerraform(struct?: DataAwsccBatchJobDefinitionResourceRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionResourceRetentionPolicyToHclTerraform(struct?: DataAwsccBatchJobDefinitionResourceRetentionPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionResourceRetentionPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionResourceRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionResourceRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // skip_deregister_on_update - computed: true, optional: false, required: false
  public get skipDeregisterOnUpdate() {
    return this.getBooleanAttribute('skip_deregister_on_update');
  }
}
export interface DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit {
}

export function dataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // on_exit_code - computed: true, optional: false, required: false
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }

  // on_reason - computed: true, optional: false, required: false
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }

  // on_status_reason - computed: true, optional: false, required: false
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
}

export class DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktn.ComplexList {

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
  public get(index: number): DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference {
    return new DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsccBatchJobDefinitionRetryStrategy {
}

export function dataAwsccBatchJobDefinitionRetryStrategyToTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionRetryStrategyToHclTerraform(struct?: DataAwsccBatchJobDefinitionRetryStrategy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionRetryStrategyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }

  // evaluate_on_exit - computed: true, optional: false, required: false
  private _evaluateOnExit = new DataAwsccBatchJobDefinitionRetryStrategyEvaluateOnExitList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
}
export interface DataAwsccBatchJobDefinitionTimeout {
}

export function dataAwsccBatchJobDefinitionTimeoutToTerraform(struct?: DataAwsccBatchJobDefinitionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAwsccBatchJobDefinitionTimeoutToHclTerraform(struct?: DataAwsccBatchJobDefinitionTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsccBatchJobDefinitionTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsccBatchJobDefinitionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsccBatchJobDefinitionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempt_duration_seconds - computed: true, optional: false, required: false
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_job_definition awscc_batch_job_definition}
*/
export class DataAwsccBatchJobDefinition extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_batch_job_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAwsccBatchJobDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsccBatchJobDefinition to import
  * @param importFromId The id of the existing DataAwsccBatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_job_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsccBatchJobDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_batch_job_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.91.0/docs/data-sources/batch_job_definition awscc_batch_job_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_batch_job_definition',
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

  // consumable_resource_properties - computed: true, optional: false, required: false
  private _consumableResourceProperties = new DataAwsccBatchJobDefinitionConsumableResourcePropertiesOutputReference(this, "consumable_resource_properties");
  public get consumableResourceProperties() {
    return this._consumableResourceProperties;
  }

  // container_properties - computed: true, optional: false, required: false
  private _containerProperties = new DataAwsccBatchJobDefinitionContainerPropertiesOutputReference(this, "container_properties");
  public get containerProperties() {
    return this._containerProperties;
  }

  // ecs_properties - computed: true, optional: false, required: false
  private _ecsProperties = new DataAwsccBatchJobDefinitionEcsPropertiesOutputReference(this, "ecs_properties");
  public get ecsProperties() {
    return this._ecsProperties;
  }

  // eks_properties - computed: true, optional: false, required: false
  private _eksProperties = new DataAwsccBatchJobDefinitionEksPropertiesOutputReference(this, "eks_properties");
  public get eksProperties() {
    return this._eksProperties;
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

  // job_definition_arn - computed: true, optional: false, required: false
  public get jobDefinitionArn() {
    return this.getStringAttribute('job_definition_arn');
  }

  // job_definition_name - computed: true, optional: false, required: false
  public get jobDefinitionName() {
    return this.getStringAttribute('job_definition_name');
  }

  // node_properties - computed: true, optional: false, required: false
  private _nodeProperties = new DataAwsccBatchJobDefinitionNodePropertiesOutputReference(this, "node_properties");
  public get nodeProperties() {
    return this._nodeProperties;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktn.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // platform_capabilities - computed: true, optional: false, required: false
  public get platformCapabilities() {
    return this.getListAttribute('platform_capabilities');
  }

  // propagate_tags - computed: true, optional: false, required: false
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }

  // resource_retention_policy - computed: true, optional: false, required: false
  private _resourceRetentionPolicy = new DataAwsccBatchJobDefinitionResourceRetentionPolicyOutputReference(this, "resource_retention_policy");
  public get resourceRetentionPolicy() {
    return this._resourceRetentionPolicy;
  }

  // retry_strategy - computed: true, optional: false, required: false
  private _retryStrategy = new DataAwsccBatchJobDefinitionRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }

  // scheduling_priority - computed: true, optional: false, required: false
  public get schedulingPriority() {
    return this.getNumberAttribute('scheduling_priority');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktn.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // timeout - computed: true, optional: false, required: false
  private _timeout = new DataAwsccBatchJobDefinitionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
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
