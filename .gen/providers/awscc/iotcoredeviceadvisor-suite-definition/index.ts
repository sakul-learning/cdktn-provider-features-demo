// https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotcoredeviceadvisorSuiteDefinitionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_configuration IotcoredeviceadvisorSuiteDefinition#suite_definition_configuration}
  */
  readonly suiteDefinitionConfiguration: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
  /**
  * An array of key-value pairs to apply to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#tags IotcoredeviceadvisorSuiteDefinition#tags}
  */
  readonly tags?: IotcoredeviceadvisorSuiteDefinitionTags[] | cdktn.IResolvable;
}
export interface IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#certificate_arn IotcoredeviceadvisorSuiteDefinition#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#thing_arn IotcoredeviceadvisorSuiteDefinition#thing_arn}
  */
  readonly thingArn?: string;
}

export function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_arn: cdktn.stringToTerraform(struct!.certificateArn),
    thing_arn: cdktn.stringToTerraform(struct!.thingArn),
  }
}


export function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToHclTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_arn: {
      value: cdktn.stringToHclTerraform(struct!.certificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thing_arn: {
      value: cdktn.stringToHclTerraform(struct!.thingArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateArn = this._certificateArn;
    }
    if (this._thingArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.thingArn = this._thingArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateArn = undefined;
      this._thingArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateArn = value.certificateArn;
      this._thingArn = value.thingArn;
    }
  }

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string;
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // thing_arn - computed: true, optional: true, required: false
  private _thingArn?: string;
  public get thingArn() {
    return this.getStringAttribute('thing_arn');
  }
  public set thingArn(value: string) {
    this._thingArn = value;
  }
  public resetThingArn() {
    this._thingArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thingArnInput() {
    return this._thingArn;
  }
}

export class IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList extends cdktn.ComplexList {
  public internalValue? : IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] | cdktn.IResolvable

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
  public get(index: number): IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference {
    return new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration {
  /**
  * The device permission role arn of the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#device_permission_role_arn IotcoredeviceadvisorSuiteDefinition#device_permission_role_arn}
  */
  readonly devicePermissionRoleArn: string;
  /**
  * The devices being tested in the test suite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#devices IotcoredeviceadvisorSuiteDefinition#devices}
  */
  readonly devices?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] | cdktn.IResolvable;
  /**
  * Whether the tests are intended for qualification in a suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#intended_for_qualification IotcoredeviceadvisorSuiteDefinition#intended_for_qualification}
  */
  readonly intendedForQualification?: boolean | cdktn.IResolvable;
  /**
  * The root group of the test suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#root_group IotcoredeviceadvisorSuiteDefinition#root_group}
  */
  readonly rootGroup: string;
  /**
  * The Name of the suite definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#suite_definition_name IotcoredeviceadvisorSuiteDefinition#suite_definition_name}
  */
  readonly suiteDefinitionName?: string;
}

export function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    device_permission_role_arn: cdktn.stringToTerraform(struct!.devicePermissionRoleArn),
    devices: cdktn.listMapper(iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToTerraform, false)(struct!.devices),
    intended_for_qualification: cdktn.booleanToTerraform(struct!.intendedForQualification),
    root_group: cdktn.stringToTerraform(struct!.rootGroup),
    suite_definition_name: cdktn.stringToTerraform(struct!.suiteDefinitionName),
  }
}


export function iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToHclTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    device_permission_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.devicePermissionRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devices: {
      value: cdktn.listMapperHcl(iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList",
    },
    intended_for_qualification: {
      value: cdktn.booleanToHclTerraform(struct!.intendedForQualification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    root_group: {
      value: cdktn.stringToHclTerraform(struct!.rootGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suite_definition_name: {
      value: cdktn.stringToHclTerraform(struct!.suiteDefinitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicePermissionRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePermissionRoleArn = this._devicePermissionRoleArn;
    }
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._intendedForQualification !== undefined) {
      hasAnyValues = true;
      internalValueResult.intendedForQualification = this._intendedForQualification;
    }
    if (this._rootGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootGroup = this._rootGroup;
    }
    if (this._suiteDefinitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.suiteDefinitionName = this._suiteDefinitionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicePermissionRoleArn = undefined;
      this._devices.internalValue = undefined;
      this._intendedForQualification = undefined;
      this._rootGroup = undefined;
      this._suiteDefinitionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicePermissionRoleArn = value.devicePermissionRoleArn;
      this._devices.internalValue = value.devices;
      this._intendedForQualification = value.intendedForQualification;
      this._rootGroup = value.rootGroup;
      this._suiteDefinitionName = value.suiteDefinitionName;
    }
  }

  // device_permission_role_arn - computed: false, optional: false, required: true
  private _devicePermissionRoleArn?: string;
  public get devicePermissionRoleArn() {
    return this.getStringAttribute('device_permission_role_arn');
  }
  public set devicePermissionRoleArn(value: string) {
    this._devicePermissionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePermissionRoleArnInput() {
    return this._devicePermissionRoleArn;
  }

  // devices - computed: true, optional: true, required: false
  private _devices = new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices[] | cdktn.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // intended_for_qualification - computed: true, optional: true, required: false
  private _intendedForQualification?: boolean | cdktn.IResolvable;
  public get intendedForQualification() {
    return this.getBooleanAttribute('intended_for_qualification');
  }
  public set intendedForQualification(value: boolean | cdktn.IResolvable) {
    this._intendedForQualification = value;
  }
  public resetIntendedForQualification() {
    this._intendedForQualification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intendedForQualificationInput() {
    return this._intendedForQualification;
  }

  // root_group - computed: false, optional: false, required: true
  private _rootGroup?: string;
  public get rootGroup() {
    return this.getStringAttribute('root_group');
  }
  public set rootGroup(value: string) {
    this._rootGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootGroupInput() {
    return this._rootGroup;
  }

  // suite_definition_name - computed: true, optional: true, required: false
  private _suiteDefinitionName?: string;
  public get suiteDefinitionName() {
    return this.getStringAttribute('suite_definition_name');
  }
  public set suiteDefinitionName(value: string) {
    this._suiteDefinitionName = value;
  }
  public resetSuiteDefinitionName() {
    this._suiteDefinitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suiteDefinitionNameInput() {
    return this._suiteDefinitionName;
  }
}
export interface IotcoredeviceadvisorSuiteDefinitionTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#key IotcoredeviceadvisorSuiteDefinition#key}
  */
  readonly key?: string;
  /**
  * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#value IotcoredeviceadvisorSuiteDefinition#value}
  */
  readonly value?: string;
}

export function iotcoredeviceadvisorSuiteDefinitionTagsToTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotcoredeviceadvisorSuiteDefinitionTagsToHclTerraform(struct?: IotcoredeviceadvisorSuiteDefinitionTags | cdktn.IResolvable): any {
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

export class IotcoredeviceadvisorSuiteDefinitionTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotcoredeviceadvisorSuiteDefinitionTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotcoredeviceadvisorSuiteDefinitionTags | cdktn.IResolvable | undefined) {
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

export class IotcoredeviceadvisorSuiteDefinitionTagsList extends cdktn.ComplexList {
  public internalValue? : IotcoredeviceadvisorSuiteDefinitionTags[] | cdktn.IResolvable

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
  public get(index: number): IotcoredeviceadvisorSuiteDefinitionTagsOutputReference {
    return new IotcoredeviceadvisorSuiteDefinitionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}
*/
export class IotcoredeviceadvisorSuiteDefinition extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotcoredeviceadvisor_suite_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotcoredeviceadvisorSuiteDefinition to import
  * @param importFromId The id of the existing IotcoredeviceadvisorSuiteDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotcoredeviceadvisorSuiteDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotcoredeviceadvisor_suite_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.92.0/docs/resources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotcoredeviceadvisorSuiteDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: IotcoredeviceadvisorSuiteDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotcoredeviceadvisor_suite_definition',
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
    this._suiteDefinitionConfiguration.internalValue = config.suiteDefinitionConfiguration;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // suite_definition_arn - computed: true, optional: false, required: false
  public get suiteDefinitionArn() {
    return this.getStringAttribute('suite_definition_arn');
  }

  // suite_definition_configuration - computed: false, optional: false, required: true
  private _suiteDefinitionConfiguration = new IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(this, "suite_definition_configuration");
  public get suiteDefinitionConfiguration() {
    return this._suiteDefinitionConfiguration;
  }
  public putSuiteDefinitionConfiguration(value: IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration) {
    this._suiteDefinitionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suiteDefinitionConfigurationInput() {
    return this._suiteDefinitionConfiguration.internalValue;
  }

  // suite_definition_id - computed: true, optional: false, required: false
  public get suiteDefinitionId() {
    return this.getStringAttribute('suite_definition_id');
  }

  // suite_definition_version - computed: true, optional: false, required: false
  public get suiteDefinitionVersion() {
    return this.getStringAttribute('suite_definition_version');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotcoredeviceadvisorSuiteDefinitionTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotcoredeviceadvisorSuiteDefinitionTags[] | cdktn.IResolvable) {
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
      suite_definition_configuration: iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToTerraform(this._suiteDefinitionConfiguration.internalValue),
      tags: cdktn.listMapper(iotcoredeviceadvisorSuiteDefinitionTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      suite_definition_configuration: {
        value: iotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationToHclTerraform(this._suiteDefinitionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration",
      },
      tags: {
        value: cdktn.listMapperHcl(iotcoredeviceadvisorSuiteDefinitionTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IotcoredeviceadvisorSuiteDefinitionTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
