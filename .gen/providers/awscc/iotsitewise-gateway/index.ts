// https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IotsitewiseGatewayConfig extends cdktn.TerraformMetaArguments {
  /**
  * A list of gateway capability summaries that each contain a namespace and status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}
  */
  readonly gatewayCapabilitySummaries?: IotsitewiseGatewayGatewayCapabilitySummaries[] | cdktn.IResolvable;
  /**
  * A unique, friendly name for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * The gateway's platform. You can only specify one platform in a gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}
  */
  readonly gatewayPlatform: IotsitewiseGatewayGatewayPlatform;
  /**
  * The version of the gateway you want to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}
  */
  readonly gatewayVersion?: string;
  /**
  * A list of key-value pairs that contain metadata for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}
  */
  readonly tags?: IotsitewiseGatewayTags[] | cdktn.IResolvable;
}
export interface IotsitewiseGatewayGatewayCapabilitySummaries {
  /**
  * The JSON document that defines the gateway capability's configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#capability_configuration IotsitewiseGateway#capability_configuration}
  */
  readonly capabilityConfiguration?: string;
  /**
  * The namespace of the capability configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#capability_namespace IotsitewiseGateway#capability_namespace}
  */
  readonly capabilityNamespace?: string;
}

export function iotsitewiseGatewayGatewayCapabilitySummariesToTerraform(struct?: IotsitewiseGatewayGatewayCapabilitySummaries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capability_configuration: cdktn.stringToTerraform(struct!.capabilityConfiguration),
    capability_namespace: cdktn.stringToTerraform(struct!.capabilityNamespace),
  }
}


export function iotsitewiseGatewayGatewayCapabilitySummariesToHclTerraform(struct?: IotsitewiseGatewayGatewayCapabilitySummaries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capability_configuration: {
      value: cdktn.stringToHclTerraform(struct!.capabilityConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_namespace: {
      value: cdktn.stringToHclTerraform(struct!.capabilityNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseGatewayGatewayCapabilitySummariesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseGatewayGatewayCapabilitySummaries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilityConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityConfiguration = this._capabilityConfiguration;
    }
    if (this._capabilityNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityNamespace = this._capabilityNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseGatewayGatewayCapabilitySummaries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capabilityConfiguration = undefined;
      this._capabilityNamespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capabilityConfiguration = value.capabilityConfiguration;
      this._capabilityNamespace = value.capabilityNamespace;
    }
  }

  // capability_configuration - computed: true, optional: true, required: false
  private _capabilityConfiguration?: string; 
  public get capabilityConfiguration() {
    return this.getStringAttribute('capability_configuration');
  }
  public set capabilityConfiguration(value: string) {
    this._capabilityConfiguration = value;
  }
  public resetCapabilityConfiguration() {
    this._capabilityConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityConfigurationInput() {
    return this._capabilityConfiguration;
  }

  // capability_namespace - computed: true, optional: true, required: false
  private _capabilityNamespace?: string; 
  public get capabilityNamespace() {
    return this.getStringAttribute('capability_namespace');
  }
  public set capabilityNamespace(value: string) {
    this._capabilityNamespace = value;
  }
  public resetCapabilityNamespace() {
    this._capabilityNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityNamespaceInput() {
    return this._capabilityNamespace;
  }
}

export class IotsitewiseGatewayGatewayCapabilitySummariesList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseGatewayGatewayCapabilitySummaries[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseGatewayGatewayCapabilitySummariesOutputReference {
    return new IotsitewiseGatewayGatewayCapabilitySummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IotsitewiseGatewayGatewayPlatformGreengrassV2 {
  /**
  * The operating system of the core device in AWS IoT Greengrass V2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#core_device_operating_system IotsitewiseGateway#core_device_operating_system}
  */
  readonly coreDeviceOperatingSystem?: string;
  /**
  * The name of the CoreDevice in GreenGrass V2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#core_device_thing_name IotsitewiseGateway#core_device_thing_name}
  */
  readonly coreDeviceThingName?: string;
}

export function iotsitewiseGatewayGatewayPlatformGreengrassV2ToTerraform(struct?: IotsitewiseGatewayGatewayPlatformGreengrassV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    core_device_operating_system: cdktn.stringToTerraform(struct!.coreDeviceOperatingSystem),
    core_device_thing_name: cdktn.stringToTerraform(struct!.coreDeviceThingName),
  }
}


export function iotsitewiseGatewayGatewayPlatformGreengrassV2ToHclTerraform(struct?: IotsitewiseGatewayGatewayPlatformGreengrassV2 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    core_device_operating_system: {
      value: cdktn.stringToHclTerraform(struct!.coreDeviceOperatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    core_device_thing_name: {
      value: cdktn.stringToHclTerraform(struct!.coreDeviceThingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseGatewayGatewayPlatformGreengrassV2 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreDeviceOperatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDeviceOperatingSystem = this._coreDeviceOperatingSystem;
    }
    if (this._coreDeviceThingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDeviceThingName = this._coreDeviceThingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseGatewayGatewayPlatformGreengrassV2 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreDeviceOperatingSystem = undefined;
      this._coreDeviceThingName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreDeviceOperatingSystem = value.coreDeviceOperatingSystem;
      this._coreDeviceThingName = value.coreDeviceThingName;
    }
  }

  // core_device_operating_system - computed: true, optional: true, required: false
  private _coreDeviceOperatingSystem?: string; 
  public get coreDeviceOperatingSystem() {
    return this.getStringAttribute('core_device_operating_system');
  }
  public set coreDeviceOperatingSystem(value: string) {
    this._coreDeviceOperatingSystem = value;
  }
  public resetCoreDeviceOperatingSystem() {
    this._coreDeviceOperatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDeviceOperatingSystemInput() {
    return this._coreDeviceOperatingSystem;
  }

  // core_device_thing_name - computed: true, optional: true, required: false
  private _coreDeviceThingName?: string; 
  public get coreDeviceThingName() {
    return this.getStringAttribute('core_device_thing_name');
  }
  public set coreDeviceThingName(value: string) {
    this._coreDeviceThingName = value;
  }
  public resetCoreDeviceThingName() {
    this._coreDeviceThingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDeviceThingNameInput() {
    return this._coreDeviceThingName;
  }
}
export interface IotsitewiseGatewayGatewayPlatformSiemensIe {
  /**
  * The name of the IoT Core Thing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#iot_core_thing_name IotsitewiseGateway#iot_core_thing_name}
  */
  readonly iotCoreThingName?: string;
}

export function iotsitewiseGatewayGatewayPlatformSiemensIeToTerraform(struct?: IotsitewiseGatewayGatewayPlatformSiemensIe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    iot_core_thing_name: cdktn.stringToTerraform(struct!.iotCoreThingName),
  }
}


export function iotsitewiseGatewayGatewayPlatformSiemensIeToHclTerraform(struct?: IotsitewiseGatewayGatewayPlatformSiemensIe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    iot_core_thing_name: {
      value: cdktn.stringToHclTerraform(struct!.iotCoreThingName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseGatewayGatewayPlatformSiemensIe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iotCoreThingName !== undefined) {
      hasAnyValues = true;
      internalValueResult.iotCoreThingName = this._iotCoreThingName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseGatewayGatewayPlatformSiemensIe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iotCoreThingName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iotCoreThingName = value.iotCoreThingName;
    }
  }

  // iot_core_thing_name - computed: true, optional: true, required: false
  private _iotCoreThingName?: string; 
  public get iotCoreThingName() {
    return this.getStringAttribute('iot_core_thing_name');
  }
  public set iotCoreThingName(value: string) {
    this._iotCoreThingName = value;
  }
  public resetIotCoreThingName() {
    this._iotCoreThingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotCoreThingNameInput() {
    return this._iotCoreThingName;
  }
}
export interface IotsitewiseGatewayGatewayPlatform {
  /**
  * A gateway that runs on AWS IoT Greengrass V2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#greengrass_v2 IotsitewiseGateway#greengrass_v2}
  */
  readonly greengrassV2?: IotsitewiseGatewayGatewayPlatformGreengrassV2;
  /**
  * A gateway that runs on Siemens Industrial Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#siemens_ie IotsitewiseGateway#siemens_ie}
  */
  readonly siemensIe?: IotsitewiseGatewayGatewayPlatformSiemensIe;
}

export function iotsitewiseGatewayGatewayPlatformToTerraform(struct?: IotsitewiseGatewayGatewayPlatform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    greengrass_v2: iotsitewiseGatewayGatewayPlatformGreengrassV2ToTerraform(struct!.greengrassV2),
    siemens_ie: iotsitewiseGatewayGatewayPlatformSiemensIeToTerraform(struct!.siemensIe),
  }
}


export function iotsitewiseGatewayGatewayPlatformToHclTerraform(struct?: IotsitewiseGatewayGatewayPlatform | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    greengrass_v2: {
      value: iotsitewiseGatewayGatewayPlatformGreengrassV2ToHclTerraform(struct!.greengrassV2),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseGatewayGatewayPlatformGreengrassV2",
    },
    siemens_ie: {
      value: iotsitewiseGatewayGatewayPlatformSiemensIeToHclTerraform(struct!.siemensIe),
      isBlock: true,
      type: "struct",
      storageClassType: "IotsitewiseGatewayGatewayPlatformSiemensIe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IotsitewiseGatewayGatewayPlatformOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IotsitewiseGatewayGatewayPlatform | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._greengrassV2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greengrassV2 = this._greengrassV2?.internalValue;
    }
    if (this._siemensIe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siemensIe = this._siemensIe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IotsitewiseGatewayGatewayPlatform | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._greengrassV2.internalValue = undefined;
      this._siemensIe.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._greengrassV2.internalValue = value.greengrassV2;
      this._siemensIe.internalValue = value.siemensIe;
    }
  }

  // greengrass_v2 - computed: true, optional: true, required: false
  private _greengrassV2 = new IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(this, "greengrass_v2");
  public get greengrassV2() {
    return this._greengrassV2;
  }
  public putGreengrassV2(value: IotsitewiseGatewayGatewayPlatformGreengrassV2) {
    this._greengrassV2.internalValue = value;
  }
  public resetGreengrassV2() {
    this._greengrassV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greengrassV2Input() {
    return this._greengrassV2.internalValue;
  }

  // siemens_ie - computed: true, optional: true, required: false
  private _siemensIe = new IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(this, "siemens_ie");
  public get siemensIe() {
    return this._siemensIe;
  }
  public putSiemensIe(value: IotsitewiseGatewayGatewayPlatformSiemensIe) {
    this._siemensIe.internalValue = value;
  }
  public resetSiemensIe() {
    this._siemensIe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siemensIeInput() {
    return this._siemensIe.internalValue;
  }
}
export interface IotsitewiseGatewayTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}
  */
  readonly value?: string;
}

export function iotsitewiseGatewayTagsToTerraform(struct?: IotsitewiseGatewayTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function iotsitewiseGatewayTagsToHclTerraform(struct?: IotsitewiseGatewayTags | cdktn.IResolvable): any {
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

export class IotsitewiseGatewayTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IotsitewiseGatewayTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IotsitewiseGatewayTags | cdktn.IResolvable | undefined) {
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

export class IotsitewiseGatewayTagsList extends cdktn.ComplexList {
  public internalValue? : IotsitewiseGatewayTags[] | cdktn.IResolvable

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
  public get(index: number): IotsitewiseGatewayTagsOutputReference {
    return new IotsitewiseGatewayTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway awscc_iotsitewise_gateway}
*/
export class IotsitewiseGateway extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_iotsitewise_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotsitewiseGateway to import
  * @param importFromId The id of the existing IotsitewiseGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotsitewiseGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.94.0/docs/resources/iotsitewise_gateway awscc_iotsitewise_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_gateway',
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
    this._gatewayCapabilitySummaries.internalValue = config.gatewayCapabilitySummaries;
    this._gatewayName = config.gatewayName;
    this._gatewayPlatform.internalValue = config.gatewayPlatform;
    this._gatewayVersion = config.gatewayVersion;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_capability_summaries - computed: true, optional: true, required: false
  private _gatewayCapabilitySummaries = new IotsitewiseGatewayGatewayCapabilitySummariesList(this, "gateway_capability_summaries", false);
  public get gatewayCapabilitySummaries() {
    return this._gatewayCapabilitySummaries;
  }
  public putGatewayCapabilitySummaries(value: IotsitewiseGatewayGatewayCapabilitySummaries[] | cdktn.IResolvable) {
    this._gatewayCapabilitySummaries.internalValue = value;
  }
  public resetGatewayCapabilitySummaries() {
    this._gatewayCapabilitySummaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayCapabilitySummariesInput() {
    return this._gatewayCapabilitySummaries.internalValue;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName?: string; 
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName;
  }

  // gateway_platform - computed: false, optional: false, required: true
  private _gatewayPlatform = new IotsitewiseGatewayGatewayPlatformOutputReference(this, "gateway_platform");
  public get gatewayPlatform() {
    return this._gatewayPlatform;
  }
  public putGatewayPlatform(value: IotsitewiseGatewayGatewayPlatform) {
    this._gatewayPlatform.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPlatformInput() {
    return this._gatewayPlatform.internalValue;
  }

  // gateway_version - computed: true, optional: true, required: false
  private _gatewayVersion?: string; 
  public get gatewayVersion() {
    return this.getStringAttribute('gateway_version');
  }
  public set gatewayVersion(value: string) {
    this._gatewayVersion = value;
  }
  public resetGatewayVersion() {
    this._gatewayVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayVersionInput() {
    return this._gatewayVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new IotsitewiseGatewayTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IotsitewiseGatewayTags[] | cdktn.IResolvable) {
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
      gateway_capability_summaries: cdktn.listMapper(iotsitewiseGatewayGatewayCapabilitySummariesToTerraform, false)(this._gatewayCapabilitySummaries.internalValue),
      gateway_name: cdktn.stringToTerraform(this._gatewayName),
      gateway_platform: iotsitewiseGatewayGatewayPlatformToTerraform(this._gatewayPlatform.internalValue),
      gateway_version: cdktn.stringToTerraform(this._gatewayVersion),
      tags: cdktn.listMapper(iotsitewiseGatewayTagsToTerraform, false)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_capability_summaries: {
        value: cdktn.listMapperHcl(iotsitewiseGatewayGatewayCapabilitySummariesToHclTerraform, false)(this._gatewayCapabilitySummaries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseGatewayGatewayCapabilitySummariesList",
      },
      gateway_name: {
        value: cdktn.stringToHclTerraform(this._gatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_platform: {
        value: iotsitewiseGatewayGatewayPlatformToHclTerraform(this._gatewayPlatform.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IotsitewiseGatewayGatewayPlatform",
      },
      gateway_version: {
        value: cdktn.stringToHclTerraform(this._gatewayVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(iotsitewiseGatewayTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IotsitewiseGatewayTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
